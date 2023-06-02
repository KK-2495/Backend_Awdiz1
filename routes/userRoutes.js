import express from "express";
import { changeUserData, login, register } from "../controllers/userControllers.js";
import { addProduct, getAllProducts } from "../controllers/productControllers.js";
import { checkEmail } from "../Middleware/authMiddleware.js";
import { otpEmailRegister, otpEmailVerification, otpNumberRegister, otpNumberVerification } from "../controllers/otpControllers.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-products',checkEmail, addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/change-userdata',checkEmail, changeUserData);
router.post('/otp-number-register', otpNumberRegister);
router.post('/otp-num-verification', otpNumberVerification);
router.post('/otp-email-register', otpEmailRegister);
router.post('/otp-email-verification', otpEmailVerification);

// router.post('up')

export default router;