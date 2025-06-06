import { Router } from "express";
import { registerUser,loginUser,logoutUser } from "../controllers/user.controller.js";
import { registerAdmin,loginAdmin,logoutAdmin } from "../controllers/admin.controller.js";
import { verifyJWT,verifyJWT1 } from "../middlewares/auth.middlewares.js";
import { submitContactForm } from "../controllers/contact.controllers.js";
import { addReview } from "../controllers/review.controllers.js";
import { upload } from "../middlewares/multer.midddleware.js";
const router = Router();

router.route("/userregister").post(registerUser);
router.route("/adminregister").post(registerAdmin);
router.route("/userlogin").post(loginUser);
router.route("/adminlogin").post(loginAdmin);
router.route("/userlogout").post(verifyJWT,logoutUser);
router.route("/adminlogout").post(verifyJWT1,logoutAdmin);
router.route("/contactus").post(verifyJWT,submitContactForm);
router.route("/review").post(verifyJWT,upload.single("productPhoto"),addReview);


export default router;