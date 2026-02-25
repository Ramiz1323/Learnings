const express = require('express');
const userRouter = express.Router();
const { followUserController, unfollowUserController } = require('../controllers/user.controller.js');

//Middleware
const { indentifyUser } = require('../middlewares/auth.middleware.js');

//POST - /api/users/follow/:userId - Follow a user by their ID
userRouter.post("/follow/:username", indentifyUser, followUserController);

//POST - /api/users/unfollow/:userId - Unfollow a user by their ID
userRouter.post("/unfollow/:username", indentifyUser, unfollowUserController);

module.exports = userRouter;