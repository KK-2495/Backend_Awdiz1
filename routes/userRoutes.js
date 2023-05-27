import express from "express";
import { login, register } from "../controllers/userControllers.js";
import { addProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get('/login', login);
router.post('/register', register)
router.post('/add-products', addProduct)

export default router;