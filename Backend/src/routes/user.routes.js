import { Router } from "express";
import { registerUser,loginUser,logoutUser } from "../controllers/user.controller.js";
import { registerAdmin,loginAdmin,logoutAdmin } from "../controllers/admin.controller.js";
import { verifyJWT,verifyJWT1 } from "../middlewares/auth.middlewares.js";
const router = Router();

router.route("/userregister").post(registerUser);
router.route("/adminregister").post(registerAdmin);
router.route("/userlogin").post(loginUser);
router.route("/adminlogin").post(loginAdmin);
router.route("/userlogout").post(verifyJWT,logoutUser);
router.route("/adminlogout").post(verifyJWT1,logoutAdmin);


export default router;