const mongoose=require("mongoose");

const main=async ()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("connected to mongo")
    }catch(err){
        console.log("something went wrong")
        console.log(err)
    }
}

main();
console.log("hum first")