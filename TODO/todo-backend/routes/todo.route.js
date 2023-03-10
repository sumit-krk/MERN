const express=require("express");
const todoRouter=express.Router()
const {TodoModel} = require('../models/todo.model')
todoRouter.get("/",async(req,res)=>{
    try{
        const task=await TodoModel.find(req.query);
        res.send(task);
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
})

todoRouter.post("/addTask",async(req,res)=>{
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

todoRouter.patch("/editTask/:id",async (req,res)=>{
    const ID=req.params.id;
    const task=req.body;
    try{
        await TodoModel.findByIdAndUpdate({_id:ID},task)
        res.send("Updated the task");
    }catch(err){
        console.log("something went wrong");
    }
})

todoRouter.patch("/delete/:id",async (req,res)=>{
    const ID=req.params.id;
    try{
        await TodoModel.findByIdAndDelete({_id:ID})
        res.send("deleted the task");
    }catch(err){
        console.log("something went wrong");
    }
})

module.exports={
    todoRouter
}
