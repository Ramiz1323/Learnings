const userModel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;
  const existingUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Username or email already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
    bio,
    profileImage,
  });
  const token = jwt.sign({ id: user._id, name: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    user:{
        email: user.email,
        username: user.username,
        bio: user.bio,
        profileImage: user.profileImage
    }
  });
}

async function loginController (req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ username }, { email }]
  });
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!user || !isPasswordValid){
    return res.status(401).json({ message: "Invalid username/email or password" });
  }
  const token = jwt.sign({ id: user._id, name: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully",
    user:{
        email: user.email,
        username: user.username,
        bio: user.bio,
        profileImage: user.profileImage
    }
  })
}

module.exports = {
  registerController,
  loginController
};