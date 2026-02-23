const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
    },
    followee:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const followModel = mongoose.model('follows', followSchema);

module.exports = followModel;