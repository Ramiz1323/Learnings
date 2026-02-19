const express = require('express');
const postRouter = express.Router();
const { createPostController } = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("img"), createPostController )

module.exports = postRouter;