const express = require("express");
const app = express();
app.use(express.json());
const userModel = require("../src/models/users.model");

app.get("/", (req, res) => {
  res.send("Welcome to CRUD with DB");
});

app.post("/users", async (req, res) => {
  const { name, age } = req.body;
  const user = await userModel.create({ name, age });
  res.status(201).json({
    message: "User added successfully",
    user,
  });
});

app.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({
    message: "Users fetched successfully",
    users,
  });
});

module.exports = app;
