const express = require('express');
const router = express.Router();
const control=require('../middelwares/control.js')
const autControles =require( '../controllers/autController.js')


router.get('/login',autControles.login)
router.post('/registro',control.verificabodyRegistro,autControles.registrarse)
router.post('/validacion',autControles.validacion)
module.exports = router;