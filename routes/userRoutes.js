import express from "express";
import { changeUserName, login, register } from "../controllers/userControllers.js";
import { addProduct, getAllProducts } from "../controllers/productControllers.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-products', addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/change-username', changeUserName);
// router.post('up')

export default router;