import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = express.Router();

//(2) To make our codebase cleaner, we have to create the controller to manage the functions
router.post("/singup", signup)

router.post("/login", login)

router.post("/logout", logout)

export default router