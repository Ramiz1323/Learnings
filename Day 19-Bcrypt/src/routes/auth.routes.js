require('dotenv').config();
const express = require('express');
const authRouter = express.Router();
const userModel = require('../models/user.model');
const cookie =require('cookie-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

authRouter.post("/register", async (req,res) =>{
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if(existingUser){
        return res.status(400).json({ 
            message: "User already exists" 
        });
    }
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex");
    const user = await userModel.create({ email, password: hashedPassword });

    const token = jwt.sign({ userId: user._id , userEmail: user.email}, process.env.JWT_SECRET);
    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User registered successfully",
        user,
        token
    });
});

authRouter.post("/login", async (req,res) =>{
    const { email, password } = req.body;
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex");
    const user = await userModel.findOne({ email });

    if (user && hashedPassword === user.password) {
        const token = jwt.sign({ userId: user._id , userEmail: user.email}, process.env.JWT_SECRET);
        res.cookie("jwt_token", token);
        res.status(200).json({
            message: "Login successful",
            user,
            token
        });
    } else {
        res.status(401).json({
            message: "Invalid email or password"
        });
    }
});

authRouter.post("/logout", (req, res) => {
    res.clearCookie("jwt_token");
    res.status(200).json({
        message: "Logged out successfully"
    });
});

module.exports = authRouter;