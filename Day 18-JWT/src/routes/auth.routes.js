const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }
  const hashedPassword = crypto.createHash("md5").update(password).digest("hex");
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ userId: user._id , userEmail: user.email}, process.env.JWT_SECRET_KEY);

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered successfully",
    user,
    token
  });
});

authRouter.post("/protected", (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.status(200).json({
    message: "Protected route accessed successfully",
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = crypto.createHash("md5").update(password).digest("hex");
  const user = await userModel.findOne({ email, password: hashedPassword });
  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign({ userId: user._id , userEmail: user.email}, process.env.JWT_SECRET_KEY);
  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "Login successful",
    user
  });
});

module.exports = authRouter;