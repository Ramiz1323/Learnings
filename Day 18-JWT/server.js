const app = require("./src/app");
const connectDB = require("./src/config/database");
const port = 3000;
require("dotenv").config();
connectDB();

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})