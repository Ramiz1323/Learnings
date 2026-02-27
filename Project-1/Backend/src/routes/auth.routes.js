const express = require("express");
const authRouter = express.Router();
const { registerController, loginController, getMeController } = require("../controllers/auth.controller");
const { indentifyUser } = require("../middlewares/auth.middleware");

//POST - /api/auth/register
authRouter.post("/register", registerController);

//POST - /api/auth/login
authRouter.post("/login", loginController);

//GET - /api/auth/get-me
authRouter.get("/get-me", indentifyUser , getMeController);

module.exports = authRouter;
