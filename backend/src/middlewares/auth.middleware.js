import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    // Token can come from cookies or Authorization header (Bearer token)
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace(/^Bearer\s+/i, "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select(
      "-password -refreshToken",
    );

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token expired or invalid" });
  }
};
