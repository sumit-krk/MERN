const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    text:{type:String,required:true},
    is_done:{type:Boolean,required:true}
},{
    versionKey:false
})

const TodoModel=mongoose.model("task",todoSchema)

module.exports={
    TodoModel
}