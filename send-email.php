<?php
// Contact form email handler
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit;
    }
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(trim($input['name']));
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($input['subject']));
$message = htmlspecialchars(trim($input['message']));

// Email configuration
$to_email = 'chauhanjatin022@gmail.com';
$email_subject = "Portfolio Contact: $subject";

// Create email headers
$headers = array(
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/html; charset=UTF-8'
);

// Create email body
$email_body = "
<html>
<head>
    <title>Portfolio Contact Form</title>
</head>
<body>
    <h2>New Message from Portfolio Website</h2>
    <table>
        <tr><td><strong>Name:</strong></td><td>$name</td></tr>
        <tr><td><strong>Email:</strong></td><td>$email</td></tr>
        <tr><td><strong>Subject:</strong></td><td>$subject</td></tr>
        <tr><td><strong>Message:</strong></td><td>" . nl2br($message) . "</td></tr>
    </table>
    <hr>
    <p><em>This message was sent from your portfolio contact form.</em></p>
</body>
</html>
";

// Send email
$mail_sent = mail($to_email, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Message sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send message. Please try again.'
    ]);
}
?> 