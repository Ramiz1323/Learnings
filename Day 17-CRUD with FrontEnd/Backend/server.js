require("dotenv").config()
const app = require("./src/app")
const port = 3000;
const connect = require("./src/config/database")

connect()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})