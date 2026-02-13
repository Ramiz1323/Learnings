require('dotenv').config();
const app = require("./src/app");
const port = process.env.PORT || 3000;
const connectDB = require('./src/config/database');


// Connect to MongoDB
connectDB();

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})