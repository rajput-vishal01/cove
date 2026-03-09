import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      `Error in generateAccessTokenAndRefreshToken: ${error.message}`
    );
    throw error;
  }
};

export const generateRefreshAccessToken = async (req, res) => {
  try {
    const oldRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    const decodedToken = jwt.verify(
      oldRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (oldRefreshToken !== user.refreshToken) {
      return res.status(403).json({
        message: "Invalid refresh token",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessTokenAndRefreshToken(user._id);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json({
        message: "Access token refreshed successfully",
        accessToken,
        refreshToken: newRefreshToken,
      });
  } catch (error) {
    console.log("Error refreshing token:", error);

    return res.status(401).json({
      message: "Invalid or expired refresh token",
    });
  }
};

export const signup = async (req, res) => {
  const { username, fullName, email, password } = req.body;

  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const user = await User.create({
    username: username.toLowerCase(),
    fullName,
    email,
    password,
  });

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      message: "User Created Successfully",
      user: createdUser,
    });
};
