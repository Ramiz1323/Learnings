const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {

    // Login Authentication
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ message: "Unauthorized access!! Please login first" });
    }
    let decodedToken = null;
    try{
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({ message: "Invalid token!! Please login again" });
    }

    // Image Checking
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    };

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
        user: decodedToken.id
    })
    res.status(201).json({ message: "Post created successfully", post });
}

module.exports = { 
    createPostController
 };