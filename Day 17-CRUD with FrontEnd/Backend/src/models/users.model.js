const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  description: {
    type: String
  }
});

userModel = mongoose.model("users", userSchema);

module.exports = userModel;