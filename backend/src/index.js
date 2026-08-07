import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

import { clerkMiddleware } from "@clerk/express";

import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import job from "./config/cron.js";

import clerkWebhook from "./webhooks/clerk.webhook.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./config/socket.js";


const PORT = env.PORT || 3000;
const publicDir = path.join(process.cwd(), "public");

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhook,
);

app.use(express.json());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port: ${PORT}`);

  if (env.NODE_ENV === "production") job.start();
});
