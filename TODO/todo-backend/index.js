const express=require("express");
const app=express();
const {connection,TodoModel} = require('./db')

app.use(express.json());

app.post("/addTask",async(req,res)=>{
    const data=req.body;
    console.log("data",data)
    const task=new TodoModel(data);
    await task.save();
    res.send("task added")
})

app.listen('3400',async()=>{
   try{
    await connection
    console.log("data base connected")
   }
   catch(err){
        console.log("error while connecting");
        console.log(err);
   }
    console.log("app listen on port 3400");
})