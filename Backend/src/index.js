import connectDB  from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.listen(2590 , () => {
        console.log(`Server is Running at 2590`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Error !!" , err);
});


  app.get("/api/v1", (req, res) => {
    res.send("Welcome to CKS_dev");
  });