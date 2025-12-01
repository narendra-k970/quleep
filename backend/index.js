import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";
import modelRoutes from "./routes/modelRoute.js";

// Load .env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
connectDB(process.env.MONGO_URL);

// Static folder for uploaded models
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api", modelRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
