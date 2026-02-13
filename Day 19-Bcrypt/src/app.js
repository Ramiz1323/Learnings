const express = require('express');
const app = express();
const userRouter = require('./routes/auth.routes');

app.use(express.json());
app.use('/api/users', userRouter);

module.exports = app;