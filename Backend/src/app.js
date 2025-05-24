import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


// Load environment variables from .env
dotenv.config({ path: "./.env" });

const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // fallback for dev
    credentials: true,
  })
);

// Body parsers
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Static files and cookies
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter); // e.g. /api/v1/users/register

import productrouter from "./routes/product.routes.js"
app.use("/api/v1/products",productrouter);

export { app };