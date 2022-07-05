import express from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { dataCheckForSignUp, dataCheckForSignIn } from "../middlewares/authMiddlewares.js"

const authRouter = express.Router();

authRouter.post('/sign-up', dataCheckForSignUp, signUp);
authRouter.post('/sign-in', dataCheckForSignIn, signIn);

export default authRouter;