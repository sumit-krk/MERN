const mongoose=require("mongoose");
const connection= mongoose.connect("mongodb+srv://sumit:sumit@cluster0.irhgi.mongodb.net/todonew?retryWrites=true&w=majority")

// const main=async ()=>{
//     try{
//         const connection=await mongoose.connect("mongodb://127.0.0.1:27017/todo")
//         console.log("connected to mongo")
//         // await TodoModel.insertMany([{text:'React Task',is_done:false},{text:'View Task',is_done:false}])
//         const task=new TodoModel({
//             text:'Node Js',
//             is_done:false
//         })
//         await task.save()
//     }catch(err){
//         console.log("something went wrong")
//         console.log(err)
//     }
// }

const todoSchema=mongoose.Schema({
    text:{type:String,required:true},
    is_done:{type:Boolean,required:true}
},{
    versionKey:false
})

const TodoModel=mongoose.model("task",todoSchema)

module.exports={
    connection,
    TodoModel
}

// main();

