const usuarioEsquema =require('../models/user.js');
const Role =require("../models/roles.js");
const jwt =require( 'jsonwebtoken');
const config =require('../config.js');
const utiles =require("../libs/utiles.js")

 const login=async (req,res)=>{
    
    const {email,password}=req.body;
    //Recupero el usuario por el email
    const usuarioEncontrado =await usuarioEsquema.findOne({email: email}).populate("roles");
    if(!usuarioEncontrado) {return res.status(400).send({mensaje:"No se encontro el usuario"})};
    
    //se encontro usuario controlo si el passwor es correcto
    const passwordEncontrado=await usuarioEsquema.comparaPassword(password,usuarioEncontrado.password)
    if(!passwordEncontrado){return res.status(400).send({mensaje:"El password es incorrecto"})}
        
    if (usuarioEncontrado.codeValidation!==""){return res.status(400).send({mensaje:"El usuario no ha validado su acceso"})}
    
    // el password es correcto y ya valido su acceso con el codigo se envia token
    const token=jwt.sign({id:usuarioEncontrado._id},config.palabraSecreta,{
        expiresIn:86400 //24 hs esta en segundos
    }) 
 
   
    res.status(200).send({token:token});
    
}

 const registrarse=async (req,res)=>{
    const {usuarioNombre,email,password,roles}=req.body;
    console.log(usuarioNombre,email,password,roles)
    const codigo=utiles.generarCodigo()
    if (usuarioNombre!="" & email!="" & password!=""){
        //creo nuevo usuario 
        const nuevoUsuario= new usuarioEsquema({
            usuarioNombre,
            email,
            password: await usuarioEsquema.encriptaPassword(password),
            codeValidation:codigo
        })
   
        if(roles){
            const rolesEncontrodados=await Role.find({nombreRol: {$in:roles}});
            nuevoUsuario.roles=rolesEncontrodados.map(roles=>roles._id)
        }else{
            const rol=await Role.findOne({nombreRol:"Usuario"})
            nuevoUsuario.roles=[rol._id]
        }
        
        const usuarioCreado= await nuevoUsuario.save();
        
        
        const token=jwt.sign({id:usuarioCreado._id},config.secret.palabraSecreta,{
        expiresIn:86400 //24 hs esta en segundos
        }) 
       
       const resp= await utiles.enviarCorreo(email,'Codigo de verificacion',`este es el codigo que necesitaras para validar tu cuenta ${codigo}` )
       console.log(resp) 
       return res.status(200).send("EL EMAIL SE ENVIO CON EXITO")
       
        //return res.status(200).send({token:token})
    }else return res.status(500).send({mensaje:"Error en los parametros de registro"})
}

const validacion=async (req,res)=>{
    const {codeValidation}=req.body
    const usuarioEncontrado =await usuarioEsquema.findOne({ codeValidation: codeValidation})
    console.log("Se encontro el usuario "+usuarioEncontrado)
    if (!usuarioEncontrado){{return res.status(400).send({mensaje:"el codigo no es valido"})}}
    usuarioEncontrado.codeValidation=""
    await usuarioEncontrado.save().then(()=> {
        const token=jwt.sign({id:usuarioEncontrado._id},config.palabraSecreta,{
            expiresIn:86400})  //24 hs esta en segundos
        console.log('La propiedad codeValidation del usuario se actualizó correctamente');
        return res.status(200).send({token:token});
    }).catch((err)=>{console.log("Error al  realizar la validación")})
            
}
    


module.exports={login,
                registrarse,
                validacion
            }