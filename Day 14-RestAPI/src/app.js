const express = require('express');
const app = express();
app.use(express.json());
let notes = [];


app.post("/", (req,res)=>{ ///Ignore...
    res.send("Hello World")
})



app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("Notes Created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/delete/:id",(req,res)=>{
    notes.splice(req.params.id,1)
    res.send("Notes Deleted")
})

app.patch("/notes/edit/:id",(req,res)=>{
    notes[req.params.id] = req.body
    res.send("Notes Updated")
})



module.exports = app;