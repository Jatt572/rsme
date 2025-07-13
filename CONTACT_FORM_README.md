# Contact Form Setup

## Overview
The contact form in your portfolio website is now connected to your email address: **chauhanjatin022@gmail.com**

## How It Works

### 1. **Primary Method: PHP Backend** (`send-email.php`)
- When someone submits the contact form, it first tries to send the email directly via PHP
- The email will be sent to your Gmail address automatically
- No manual intervention required

### 2. **Fallback Method: Email Client**
- If the PHP method fails (e.g., server doesn't support PHP mail), it opens your default email client
- Pre-fills the email with the contact form data
- You need to manually send the email

## Files Added/Modified

### New Files:
- `send-email.php` - PHP backend for email sending
- `test-contact.html` - Test page to verify functionality
- `CONTACT_FORM_README.md` - This documentation

### Modified Files:
- `script.js` - Added contact form functionality

## Testing the Contact Form

### Option 1: Test Page
1. Open `test-contact.html` in your browser
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email (chauhanjatin022@gmail.com)

### Option 2: Main Portfolio
1. Open `index.html` in your browser
2. Scroll to the "Get In Touch" section
3. Fill out the contact form
4. Click "Send Message"

## Email Format

When someone submits the contact form, you'll receive an email with:

**Subject:** `Portfolio Contact: [Their Subject]`

**Body:**
```
New Message from your portfolio website:

Name: [Their Name]
Email: [Their Email]
Subject: [Their Subject]

Message:
[Their Message]

---
This message was sent from your portfolio contact form.
```

## Requirements

### For PHP Method to Work:
1. **Web Server with PHP**: You need a web server that supports PHP
2. **Mail Function**: The server must have the `mail()` function enabled
3. **Proper Configuration**: SMTP settings must be configured on the server

### For Fallback Method:
- Any modern web browser
- Default email client configured

## Troubleshooting

### If emails aren't being sent:

1. **Check Server Logs**: Look for PHP errors in server logs
2. **Test PHP Mail**: Create a simple PHP test to verify mail function works
3. **Check Spam Folder**: Emails might go to spam initially
4. **Verify Email Address**: Ensure chauhanjatin022@gmail.com is correct

### Common Issues:

1. **"PHP email failed" message**: Server doesn't support PHP mail
   - Solution: Use the fallback method (email client opens)

2. **"Failed to send message"**: Server configuration issue
   - Solution: Contact your hosting provider

3. **No email received**: Check spam folder or server configuration
   - Solution: Test with a different email address

## Security Features

- **Input Validation**: All form fields are validated
- **Email Format Check**: Ensures valid email addresses
- **XSS Protection**: Input is sanitized to prevent attacks
- **CSRF Protection**: Form includes proper headers

## Customization

### To Change Email Address:
Edit `send-email.php` line 35:
```php
$to_email = 'your-new-email@gmail.com';
```

### To Modify Email Format:
Edit the `$email_body` section in `send-email.php`

### To Add More Fields:
1. Add fields to the HTML form
2. Update the PHP validation
3. Modify the email template

## Support

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Test with the test page first
3. Verify your server supports PHP mail function
4. Contact your hosting provider for mail configuration

## Files Structure
```
FileConverterPro/
├── index.html          # Main portfolio page
├── script.js           # JavaScript with contact form
├── send-email.php      # PHP email handler
├── test-contact.html   # Test page
└── CONTACT_FORM_README.md # This file
``` 