import express from "express";
import cors from "cors";

import { clerkMiddleware } from "@clerk/express";

import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port: ${PORT}`);
});
