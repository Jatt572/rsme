# Troubleshooting: "System Uptime 0%" Error

## Overview
The "system uptime 0%" error you're encountering is likely not coming from your application code, but from external sources. This guide will help you identify and resolve the issue.

## Step-by-Step Debugging Process

### 1. Check Browser Developer Tools
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Look for any error messages containing "uptime" or "system"
4. Check the Network tab for any failed requests
5. Check the Sources tab for any external scripts

### 2. Disable Browser Extensions
1. Open your browser's extension management
2. Disable all extensions temporarily
3. Refresh the page
4. If the error disappears, re-enable extensions one by one to identify the culprit

### 3. Check for System Monitoring Tools
- **Windows Task Manager**: Check if any system monitoring tools are running
- **Resource Monitor**: Look for processes that might be monitoring system performance
- **Event Viewer**: Check for any system events related to performance monitoring

### 4. Browser-Specific Checks

#### Chrome/Edge
1. Open Developer Tools
2. Go to Performance tab
3. Check if there are any performance monitoring extensions
4. Look for any "system uptime" related messages

#### Firefox
1. Open Developer Tools
2. Check the Console for any system-related messages
3. Look for any performance monitoring add-ons

### 5. Check External Scripts
Your application loads these external resources:
- Google Fonts
- Font Awesome
- Any browser extensions you have installed

### 6. Debug Script Added
I've added a debug script (`debug.js`) that will:
- Monitor for any errors containing "uptime"
- Log all console messages
- Track external scripts
- Monitor performance APIs

## Common Causes and Solutions

### 1. Browser Extensions
**Cause**: Extensions like system monitors, performance trackers, or developer tools
**Solution**: Disable extensions temporarily

### 2. Developer Tools
**Cause**: Browser's built-in performance monitoring
**Solution**: Close Developer Tools or disable performance monitoring

### 3. System Monitoring Software
**Cause**: Windows performance monitoring or third-party system tools
**Solution**: Check Task Manager for monitoring processes

### 4. Network Issues
**Cause**: Failed requests to external resources
**Solution**: Check Network tab in Developer Tools

## Testing Steps

1. **Open the page in an incognito/private window**
   - This disables extensions
   - If error disappears, it's extension-related

2. **Try a different browser**
   - If error persists, it's system-related
   - If error disappears, it's browser-specific

3. **Check the debug console**
   - Look for messages from the debug script
   - Note any "UPTIME" related messages

## Expected Behavior

Your application should:
- Load without any "system uptime" errors
- Display the IT Engineer portfolio correctly
- Have smooth animations and interactions
- Allow resume download functionality

## If Error Persists

If the error continues after trying these steps:

1. **Check Windows Event Viewer**
   - Look for any system performance events
   - Check for any application errors

2. **Run System File Checker**
   ```cmd
   sfc /scannow
   ```

3. **Check for Windows Updates**
   - Some system monitoring features might be outdated

4. **Contact Support**
   - If the error affects functionality, provide:
     - Browser type and version
     - Operating system version
     - List of installed extensions
     - Screenshot of the error

## Debug Script Output

The debug script will log:
- Any errors containing "uptime"
- External scripts loaded
- Performance API information
- System-related messages

Check the browser console for these messages to help identify the source of the error. 