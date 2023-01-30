const express=require("express");
const app=express();
const {connection,TodoModel} = require('./db')

app.use(express.json());

app.get("/getTask",async(req,res)=>{
    try{
        const task=await TodoModel.find(req.query);
        res.send(task);
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
})

app.post("/addTask",async(req,res)=>{
    const data=req.body;
    try{
        const task=new TodoModel(data);
        await task.save();
        res.send("task added")
    }catch(err){
        console.log(err)
        res.send("something went wrong")
    }
})

app.patch("/editTask/:id",async (req,res)=>{
    const ID=req.params.id;
    const task=req.body;
    try{
        await TodoModel.findByIdAndUpdate({_id:ID},task)
        res.send("Updated the task");
    }catch(err){
        console.log("something went wrong");
    }
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