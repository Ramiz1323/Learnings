const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is required"]
    },
    post:{
        type: String,
        ref: "posts",
        required: [true, "Post is required"]
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

likeSchema.index({ user: 1, post: 1 }, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);

module.exports = likeModel;