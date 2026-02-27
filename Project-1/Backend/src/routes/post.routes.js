const express = require('express');
const postRouter = express.Router();
const { createPostController, getPostController, getPostDetailsController,likePostController, getFeedController } = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const { indentifyUser } = require('../middlewares/auth.middleware.js');

//  POST - /api/posts - Create a new post with image and caption
postRouter.post("/", upload.single("img"), createPostController )

// GET - /api/posts - Get all posts of the logged in user
postRouter.get("/", indentifyUser, getPostController)

//GET - /api/posts/details/:postId - return the details of a single post by id & checking if the post belongs to the logged in user or not.
postRouter.get("/details/:postId", indentifyUser, getPostDetailsController)

//POST - /api/posts/like/:postId - Like a post by its ID
postRouter.post("/like/:postId", indentifyUser, likePostController)

//GET - /api/posts/feed - Get all posts of the logged in user's friends
postRouter.get("/feed", indentifyUser, getFeedController)
module.exports = postRouter;