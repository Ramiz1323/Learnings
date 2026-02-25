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
    },
    status: {
        type: String,
        default: 'pending',
        enum: {
            values: ['pending', 'accepted', 'rejected'],
            message: 'Status must be either pending, accepted, or rejected'
        }
    }
})

followSchema.index({ follower: 1, followee: 1 }, { unique: true });

const followModel = mongoose.model('follows', followSchema);

module.exports = followModel;