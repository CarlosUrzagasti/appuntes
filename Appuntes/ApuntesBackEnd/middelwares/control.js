
const usuarioEsquema =require("../models/user.js");


const verificabodyRegistro=async(req,res,next)=>{
//desestructuro el body
    const{usuarioNombre, email,password}=req.body;
//cadena regular para controlar el nombre del usuario
const regexNombre = /^[a-zA-Z0-9]+$/;
const nombreUsuarioValido= usuarioNombre.match(regexNombre);
//controlo que nombre del usuario es correcto y si su longitud es mayor a 6 caracteres
if (!nombreUsuarioValido || (usuarioNombre.length<6)) return  res.status(401).send({mensjae:"el nombre de usuarios solo puede contener letras y/o números y debe terer al menos 6 caracteres"});

//el nombre de usuario fue valido controlo el email
//cadena regular para el emial 
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailValido=email.match(regexEmail);
if (!emailValido) return  res.status(401).send({mensjae:"Debe ingresar un email valido"});

//el email es correcto controlo el password
const regexPassword = /^[a-zA-Z0-9]+$/;
const passwordValido= password.match(regexPassword);
if(!passwordValido || (password.length<8)) return  res.status(401).send({mensjae:"El password solo puede contener letras y/o números, debe tener una longitud de al menos 8 caracteres "});

//continua la ejecucion
next() 
}

module.exports={verificabodyRegistro}