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

      // In a real implementation, you would:
      // 1. Save the contact form submission to a database
      // 2. Send an email notification
      // 3. Send a confirmation email to the user
      
      console.log("Contact form submission for Hussain Ali Mesharwala:", {
        firstName,
        lastName,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

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
