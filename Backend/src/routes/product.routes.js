import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { addProduct,getAllProducts } from "../controllers/product.controller.js";
import { verifyJWT1 } from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/admin/addproducts",
  verifyJWT1,             
  addProduct,                 
  upload.array("photos", 7) 
);


router.get("/", getAllProducts);


export default router;
