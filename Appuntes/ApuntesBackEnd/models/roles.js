const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;

const role=new Schema({
    nombreRol:String
    },
    {
    versionkey:false
})

module.exports = model("Role",role)