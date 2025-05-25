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
    origin: "https://yajveer-cqp2.vercel.app" || "http://localhost:3000", // fallback for dev
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



app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});