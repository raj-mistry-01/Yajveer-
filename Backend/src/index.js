import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
  .then(() => {
    // const PORT = process.env.PORT || 8000; 
    const PORT = 2590; 
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

  app.get("/api/v1", (req, res) => {
    res.send("Welcome to CKS_dev");
  });