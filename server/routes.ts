import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Prepare data for Google Sheets
      const formData = {
        firstName,
        lastName,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
        fullName: `${firstName} ${lastName}`
      };

      // Send data to Google Apps Script
      const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
      
      if (googleAppsScriptUrl) {
        try {
          const response = await fetch(googleAppsScriptUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            console.error('Failed to send data to Google Sheets:', response.statusText);
            // Continue without failing the request
          } else {
            console.log('Successfully sent data to Google Sheets');
          }
        } catch (googleSheetsError) {
          console.error('Error sending to Google Sheets:', googleSheetsError);
          // Continue without failing the request
        }
      } else {
        console.log('Google Apps Script URL not configured');
      }

      // Log for backup/debugging
      console.log("Contact form submission for Hussain Ali Mesharwala:", formData);

      res.json({ 
        message: "Contact form submitted successfully",
        success: true 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
