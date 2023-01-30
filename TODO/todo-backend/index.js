const express=require("express");
const app=express();
import {connection} from './db';

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