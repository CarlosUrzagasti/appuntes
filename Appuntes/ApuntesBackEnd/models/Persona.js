const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;


const persona = new Schema({
    Nombre:{
        type: String,
        },
    Apellido:{
        type: String,
    
    },
    fechaNac:{
        type: Date,
    },
           
    usuarioID:{
            ref:"usuarioEsquema",
            type:Schema.Types.ObjectId
    },
    carera:{
        type: String,
        },
              
   },
    {
    timestamps:true,
    versionKey:false,
 
    }

)
module.exports = model("Persona",persona);