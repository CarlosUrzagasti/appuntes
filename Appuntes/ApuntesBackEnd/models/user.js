const mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const model=mongoose.model;
const bcryptjs =require('bcryptjs');

const usuarioEsquema = new Schema({
    usuarioNombre:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type:String
    },
    codeValidation:{
        type:String
    },
    roles:[{
        ref:"Role",
        type:Schema.Types.ObjectId
    }
]},
    {
    timestamps:true,
    versionKey:false,
 
    }

)

usuarioEsquema.statics.encriptaPassword= async (password)=>{
    const salt= await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password,salt)
}

usuarioEsquema.statics.comparaPassword=async (password,passwordIngresoado)=>{
    return await bcryptjs.compare(password,passwordIngresoado)
}
module.exports = model("usuarioEsquema",usuarioEsquema);

