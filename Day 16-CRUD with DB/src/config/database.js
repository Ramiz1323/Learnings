const mongoose = require("mongoose");

function conn(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = conn; 