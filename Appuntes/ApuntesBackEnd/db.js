const mongoose =require("mongoose");
const  config =require( './config.js');
// urza:determino el entorno a usar 
const env = process.env.NODE_ENV || 'development';

// urza:recupero el perto desde el config segun el entorno
const dataBase  = config.config[env].database;
mongoose.set('strictQuery', true);
mongoose.connect(dataBase)    
    .then(db=>console.log("Conección a la base de datos correcta"))
    .catch(error=> console.log("Eror en la base "+error))