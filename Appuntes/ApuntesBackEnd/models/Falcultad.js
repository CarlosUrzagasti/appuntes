const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;

const facultad = new Schema({
    FacultadNombre:{
        type: String,
        },
      
    universidadID:{
            ref:"universidad",
            type:Schema.Types.ObjectId
        }
          
   },
    {
    timestamps:true,
    versionKey:false,
 
    }

)
module.exports = model("facultad",facultad);