import express from "express";
import {
  signup,
  generateRefreshAccessToken,
} from "../controller/auth.controller.js";

import { signupSchema } from "../validators/auth.validator.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);

router.post("/refresh-token", generateRefreshAccessToken);

export default router;
