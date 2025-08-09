import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve specific HTML for blogs route for SEO (only in production)
  if (process.env.NODE_ENV === "production") {
    app.get("/blogs", (req, res) => {
      const blogsPath = path.resolve(import.meta.dirname, "public", "blogs.html");
      if (fs.existsSync(blogsPath)) {
        res.sendFile(blogsPath);
      } else {
        // Fallback to regular SPA handling
        res.redirect("/");
      }
    });
  }
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      console.log(`📧 New contact submission from ${contact.name} (${contact.email})`);
      
      res.json({ 
        success: true, 
        message: "Contactbericht succesvol ontvangen",
        contact: {
          id: contact.id,
          name: contact.name,
          createdAt: contact.createdAt
        }
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ 
        success: false, 
        message: "Er ging iets mis bij het versturen van je bericht" 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Er ging iets mis bij het ophalen van contactberichten" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
