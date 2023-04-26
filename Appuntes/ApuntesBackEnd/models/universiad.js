const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;


const universidad = new Schema({
    UniversidadNombre:{
        type: String,
        },
    Domicilio:{
        type: String,
    
    },
     
          
   },
    {
    timestamps:true,
    versionKey:false,
 
    }

)
module.exports = model("universidad",universidad);