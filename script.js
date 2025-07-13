// Professional IT Engineer Portfolio JavaScript

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initResumeDownload();
    initScrollToTop();
    initContactForm();
});

// Navigation Functions
function initNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Change icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (navToggle) {
                const icon = navToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                smoothScrollTo(offsetTop, 800);
            }
        });
    });
}

// Custom smooth scroll function
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function
        const easeInOutQuad = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Scroll Effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Navbar scroll effects
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation link
        updateActiveNavLink();
        
        // Show/hide scroll to top button
        const scrollToTopBtn = document.querySelector('.scroll-to-top');
        if (scrollToTopBtn) {
            if (currentScrollY > 500) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animation and Intersection Observer
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animate counters when stats section comes into view
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
                
                // Animate tech items with stagger
                if (entry.target.classList.contains('tech-icons')) {
                    animateTechItems();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-stats, .tech-icons, .stat-card, .tech-item, .skill-category, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const originalText = counter.textContent;
        const target = parseInt(originalText.replace(/\D/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                const suffix = originalText.includes('+') ? '+' : 
                             originalText.includes('%') ? '%' : '';
                counter.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure we show the exact original text at the end
                counter.textContent = originalText;
            }
        };
        
        updateCounter();
    });
}

// Animate tech items with stagger effect
function animateTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
}

// Resume download functionality
function initResumeDownload() {
    // Handle resume button clicks
    const resumeButtons = document.querySelectorAll('a[href="assets/resume.pdf"]');
    resumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            downloadResume();
        });
    });
}

function downloadResume() {
    const resumeContent = `
JATIN CHAUHAN - IT ENGINEER
==============================

CONTACT INFORMATION
• Location: Surat, Gujarat, India
• Phone: +91 7041884704
• Email: chauhanjatin022@gmail.com

PROFESSIONAL SUMMARY
Dynamic and results-driven IT Engineer with a Bachelor of Computer Applications (BCA) 
from Bhagawan Mahavir University and over 2 years of hands-on experience in managing 
IT infrastructure and operations. Proven expertise in troubleshooting hardware/software 
issues, implementing cybersecurity practices, and ensuring smooth IT support across 
environments. Adept in IT procurement processes—including vendor coordination, asset 
management, and sourcing cost-effective solutions—to optimize resource allocation and 
IT performance. Skilled in macOS troubleshooting, networking, and effective 
cross-functional collaboration.

EDUCATION
Bachelor of Computer Applications (BCA)
Bhagawan Mahavir University, Surat
Graduated: 2024

TECHNICAL SKILLS
Operating Systems:
• macOS, Windows, Linux

Networking:
• Firewall, TCP/IP, LAN/WAN, DNS, DHCP
• VPN configuration, network performance monitoring
• VLAN setup, wireless network troubleshooting

Hardware:
• Desktops, Laptops, MacBooks, Servers, Printers

Software:
• Microsoft Office Suite, Antivirus Programs
• Remote Desktop Tools, Google Admin Suite
• Jira Ticket Management, MDM Software

macOS Troubleshooting:
• Advanced diagnostics using Disk Utility, Activity Monitor, Terminal
• Hardware/software conflict resolution
• System upgrades, software installations, troubleshooting, formatting

PROFESSIONAL EXPERIENCE
IT Engineer
HotelKey India Private Limited, Surat
June 2023 - Present

Key Responsibilities:
• Manage and administer Google Workspace for 500+ users, including user 
  provisioning, group management, organizational units, and device enrollment/removal
• Configure Microsoft 365 Administration: Teams setup, SharePoint permissions, 
  user account creation, license assignment, and password resets via MS Admin Console
• Administer Slack, including workspace settings, user onboarding/offboarding, 
  integrations, and compliance
• Provide IT support across MacOS, Windows and Linux platforms
• Resolve hardware and software issues quickly to maintain high availability
• Create and maintain documentation for IT procedures, onboarding, and troubleshooting
• Improved system efficiency by optimizing network infrastructure and implementing 
  new technologies
• Enhanced security by implementing firewalls, VPNs, and access control systems
• Integrated fixed wireless connectivity into facilities requiring high-speed networks

CERTIFICATIONS
Advanced Diploma in Cybersecurity Standards
PureSkill IT Training Academy AIMCVT
Issued: May 2023

KEY PROJECTS
Office Setup Project
• Successfully set up a complete office infrastructure for a new city branch
• Installed and configured access points, firewalls, smart TVs, cameras
• Designed and implemented conference room setups
• Ensured seamless network connectivity and security protocols

CORE COMPETENCIES
• IT Infrastructure Management
• System Administration
• Network Security
• Hardware/Software Troubleshooting
• User Account Management
• Documentation and Training
• Vendor Coordination
• Asset Management
• Cybersecurity Implementation
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jatin_Chauhan_IT_Engineer_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    showNotification('Resume downloaded successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; margin-left: 1rem;">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 4000);
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    
    document.body.appendChild(scrollToTopBtn);
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        smoothScrollTo(0, 600);
    });
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Additional scroll optimizations can be added here
}, 10));

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate form data
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Send email using mailto link
            sendEmail(name, email, subject, message);
        });
    }
}

function sendEmail(name, email, subject, message) {
    // Show loading notification
    showNotification('Sending message...', 'info');
    
    // Prepare data for PHP backend
    const emailData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    
    // Try to send via PHP backend first
    fetch('send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification(data.message, 'success');
            document.getElementById('contact-form').reset();
        } else {
            // Fallback to mailto if PHP fails
            fallbackToMailto(name, email, subject, message);
        }
    })
    .catch(error => {
        console.error('PHP email failed:', error);
        // Fallback to mailto
        fallbackToMailto(name, email, subject, message);
    });
}

function fallbackToMailto(name, email, subject, message) {
    // Create email content
    const emailSubject = `Portfolio Contact: ${subject}`;
    const emailBody = `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:chauhanjatin022@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    // Show success notification
    showNotification('Email client opened! Please send the email manually.', 'success');
    
    // Clear the form
    document.getElementById('contact-form').reset();
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});