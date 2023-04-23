const Role =require("./models/roles.js")
const config = {
    development: {
      port: 3000,
      database: "mongodb://localhost:27017/appuntesDB",
    },
    production: {
      port: process.env.PORT,
      database: process.env.MONGODB_URI,
    },
  };
  const  secret={palabraSecreta:"Creando usuario"};

 //Crea los roles en la base de datos
 const creaRoles=async()=>{
  try {
  const count= await Role.estimatedDocumentCount();
 // si tiene documentos retorna sin hacer nada
  if(count>0) return;
     //no tiene documentos creo los roles
      await Promise.all([
      new Role({nombreRol:"Usuario"}).save(),
      new Role({nombreRol:"Moderador"}).save(),
      new Role({nombreRol:"Admin"}).save()
  ]);
      
            
  } catch (error) {
      console.log(error)    
  }    
} 
 
 
  module.exports ={ config,
                    secret,
                    creaRoles
                  };
  