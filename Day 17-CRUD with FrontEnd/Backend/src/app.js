const express = require("express");
const app = express();
const userModel = require("./models/users.model");

const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/api/users", async (req, res) => {
  const { name, age, description } = req.body;
  const user = await userModel.create({ name, age, description });
  res.status(201).json({
    message: "User created successfully",
    data: user,
  });
});

app.get("/api/users", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({
    message: "Data fetched Successfully...",
    users,
  });
});

app.delete("/api/users/delete/:id", async (req, res) => {
  const deletedUser = await userModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "User deleted successfully",
    deletedUser: deletedUser,
  });
});

app.patch("/api/users/update/:id", async (req, res) => {
  const { description } = req.body;
  const updatedUser = await userModel.findByIdAndUpdate(
    req.params.id,
    { description },
    { new: true },
  );
  res.status(200).json({
    message: "User updated successfully",
    updatedUser: updatedUser,
  });
});

module.exports = app;
