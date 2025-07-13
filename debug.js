// Debug script to identify "system uptime 0%" error
console.log('=== Debug Script Started ===');

// Monitor for any errors
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
    console.error('Error message:', e.message);
    console.error('Error source:', e.filename);
    console.error('Line number:', e.lineno);
});

// Monitor for unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// Check for any performance-related APIs
if (window.performance) {
    console.log('Performance API available');
    console.log('Navigation timing:', window.performance.navigation);
    console.log('Memory info:', window.performance.memory);
}

// Check for any system-related APIs
if (navigator.hardwareConcurrency) {
    console.log('CPU cores:', navigator.hardwareConcurrency);
}

// Monitor for any custom events
window.addEventListener('message', function(e) {
    console.log('Message received:', e.data);
    if (e.data && typeof e.data === 'string' && e.data.includes('uptime')) {
        console.error('Uptime-related message detected:', e.data);
    }
});

// Check for any external scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking for external scripts...');
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        console.log('External script found:', script.src);
    });
});

// Monitor console for any uptime-related messages
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.log = function(...args) {
    const message = args.join(' ');
    if (message.toLowerCase().includes('uptime')) {
        console.error('UPTIME MESSAGE DETECTED in console.log:', message);
    }
    originalConsoleLog.apply(console, args);
};

console.error = function(...args) {
    const message = args.join(' ');
    if (message.toLowerCase().includes('uptime')) {
        console.error('UPTIME ERROR DETECTED in console.error:', message);
    }
    originalConsoleError.apply(console, args);
};

console.warn = function(...args) {
    const message = args.join(' ');
    if (message.toLowerCase().includes('uptime')) {
        console.error('UPTIME WARNING DETECTED in console.warn:', message);
    }
    originalConsoleWarn.apply(console, args);
};

console.log('Debug script loaded successfully'); 