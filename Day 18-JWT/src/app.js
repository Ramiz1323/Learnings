const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/auth.routes");

app.use(express.json()); //req.body middleware
app.use(cookieParser()); //cookie parser middleware

app.use("/api/users", userRouter);

module.exports = app;