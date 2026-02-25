const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model.js");
const likeModel = require("../models/like.model.js");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // Image Checking
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }

  // Image Uploading
  const file = await imagekit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname,
    folder: "instagram-posts",
  });

  // Post Creation
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });
  res.status(201).json({ message: "Post created successfully", post });
}

async function getPostController(req, res) {
  // Find all posts of the logged in user
  const posts = await postModel.find({ user: req.user.id });
  res.status(200).json({ message: "Posts fetched successfully", posts });
}

async function getPostDetailsController(req, res) {
  //Find the post by id and check if the post belongs to the logged in user or not.
  const user = req.user.id;
  await postModel
    .findById(req.params.postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (post.user.toString() !== user) {
        return res
          .status(403)
          .json({ message: "You are not authorized to view this post" });
      }
      res
        .status(200)
        .json({ message: "Post details fetched successfully", post });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching post details", error: err.message });
    });
}

async function likePostController(req, res) {
  const username = req.user.name;
  const postId = req.params.postId;

  // Check if the post exists
  const postexists = await postModel.findById(postId);
  if (!postexists) {
      return res.status(404).json({ message: "Post not found" });
  }
  
  // Check if the user has already liked the post
  const isLiked = await likeModel.findOne({ user: req.user.id, post: postId });
  if (isLiked) {
    return res.status(400).json({ message: "You have already liked this post" });
  }

  // Create a new like
  const like = await likeModel.create({
    user: req.user.id,
    post: postId,
  });
  res.status(200).json({
    message: "Post liked successfully",
    like: {
      likeId: like._id,
      username: username,
      postId: postId,
    },
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
};
