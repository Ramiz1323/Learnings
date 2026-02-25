const express = require('express');
const userRouter = express.Router();
const { followUserController, unfollowUserController, followStatusController } = require('../controllers/user.controller.js');

//Middleware
const { indentifyUser } = require('../middlewares/auth.middleware.js');

//POST - /api/user/follow/:username - Follow a user by their ID
userRouter.post("/follow/:username", indentifyUser, followUserController);

//POST - /api/user/unfollow/:username - Unfollow a user by their ID
userRouter.post("/unfollow/:username", indentifyUser, unfollowUserController);

//PATCH - /api/user/status/:followername - Accept or reject a follow request by its ID
userRouter.patch("/status/:followername", indentifyUser, followStatusController);

module.exports = userRouter;