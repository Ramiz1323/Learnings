const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        default:""
    },
    imgUrl: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;