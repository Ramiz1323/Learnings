require("dotenv").config();
const app = require('./src/app');
const port = 3000;
const conn = require('./src/config/database');

conn();

app.listen(port,() =>{
    console.log(`Connected to port ${port}`);
})