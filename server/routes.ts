import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve resume PDF for download
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "Yash_Resume_1761637973840.pdf");
    res.download(resumePath, "Yash_Khandelwal_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(500).send("Error downloading resume");
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
