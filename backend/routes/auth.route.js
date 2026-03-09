import express from "express";
import {
  signup,
  generateRefreshAccessToken,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/refresh-token", generateRefreshAccessToken);

export default router;
