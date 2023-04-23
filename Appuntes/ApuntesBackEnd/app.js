const  express=require('express');
const  rutasregistro=require("./router/rutasregistro.js")
const config =require("./config.js")
const cors=require("cors")
const app = express();

// Configurar rutas y middlewares aquí
app.use(cors())
app.use(express.json());
//controla sino exite la tabla de roles la crea automaricamente
config.creaRoles()
//llamada a rutas
app.use('/api/ingreso',rutasregistro)

 //const database = config[env].database;

 module.exports= app;

