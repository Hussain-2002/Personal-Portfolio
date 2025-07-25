# Google Apps Script Setup for Contact Form Integration

This guide will help you integrate your contact form with Google Sheets using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. In row 1, add these headers:
   - A1: `Timestamp`
   - B1: `Full Name`
   - C1: `First Name`
   - D1: `Last Name`
   - E1: `Email`
   - F1: `Subject`
   - G1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Extract form data
    const timestamp = data.timestamp || new Date().toISOString();
    const fullName = data.fullName || `${data.firstName} ${data.lastName}`;
    const firstName = data.firstName || '';
    const lastName = data.lastName || '';
    const email = data.email || '';
    const subject = data.subject || '';
    const message = data.message || '';
    
    // Append the data to the sheet
    sheet.appendRow([
      new Date(timestamp),
      fullName,
      firstName,
      lastName,
      email,
      subject,
      message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Google Apps Script is working!'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy the Script

1. Click the "Deploy" button (top right)
2. Choose "New deployment"
3. Set type to "Web app"
4. Configuration:
   - Description: "Portfolio Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
5. Click "Deploy"
6. Copy the "Web app URL" - this is your `GOOGLE_APPS_SCRIPT_URL`

## Step 4: Set Environment Variable

1. In your Replit project, go to the "Secrets" tab (lock icon in sidebar)
2. Add a new secret:
   - Key: `GOOGLE_APPS_SCRIPT_URL`
   - Value: The Web app URL you copied from Google Apps Script

## Step 5: Test the Integration

1. Fill out your contact form on the website
2. Check your Google Sheet - the data should appear automatically
3. If there are issues, check the Apps Script execution logs:
   - Go to Apps Script → "Executions" tab
   - Check for any error messages

## Security Notes

- The Apps Script is set to "Anyone" access because it needs to receive POST requests
- Only the specific data fields are accepted and validated
- Consider adding additional validation in the Apps Script if needed

## Troubleshooting

- **Permission Issues**: Make sure you've authorized the script when prompted
- **CORS Issues**: Apps Script handles CORS automatically for web apps
- **Data Not Appearing**: Check the Apps Script execution logs for errors
- **URL Issues**: Make sure you're using the "Web app URL" not the "Script URL"

## Optional Enhancements

You can modify the Google Apps Script to:
- Send email notifications when new submissions arrive
- Format data differently
- Add data validation
- Create automatic responses