const express =  require('express');
const app = express();
app.use(express.json());

let notes=[];

// Send the data to Server => POST
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.status(201).send({
        message:"Data added successfully"
    });
})

//View the data from server => GET
app.get("/notes",(req,res)=>{
    res.send(notes);
})

//Delete the data from server => DELETE
app.delete("/notes/delete/:id",(req,res)=>{
    notes.splice(req.params.id,1);
    res.status(200).send({
        message:"Data deleted successfully"
    });
})

//Update the data from server => PATCH
app.patch("/notes/update/:id",(req,res)=>{
    notes[req.params.id] = req.body;
    res.status(200).send({
        message:"Data updated successfully"
    })
})

module.exports = app;