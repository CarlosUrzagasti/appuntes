const app = require('./app.js');
const  config =require( './config.js');
const db=require('./db.js')
// urza:determino el entorno a usar 
const env =process.env.NODE_ENV ||'development';

// urza:recupero el perto desde el config segun el entorno
const port =config.config[env].port
; //process.env.PORT ||*/

//urza:inicio el servidor
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
    //console.log(`Base de datos conectada en ${database}`);
  });