const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;

const carrera = new Schema({
    carreraNombre:{
        type: String,
        },
      
    facultadID:{
            ref:"facultad",
            type:Schema.Types.ObjectId
        }
          
   },
    {
    timestamps:true,
    versionKey:false,
 
    }

)
module.exports = model("facultad",facultad);