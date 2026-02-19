const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), req.file.originalname),
        fileName: req.file.originalname
    });
    res.send(file);
}

module.exports = { 
    createPostController
 };