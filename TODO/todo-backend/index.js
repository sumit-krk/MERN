const express=require("express");
const app=express();
require('dotenv').config()
const {connection} = require('./db')
const {todoRouter}=require('./routes/todo.route')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.use('/todo',todoRouter)

app.listen(process.env.port,async()=>{
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