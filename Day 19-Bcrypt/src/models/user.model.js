const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String
    }
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;