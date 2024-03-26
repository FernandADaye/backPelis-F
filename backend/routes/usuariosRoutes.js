const express = require('express')
const router = express.Router()
const{crearUser,loginUser,datoUser}=require('../controllers/usuariosControllers')
const { protect } = require('../meddleware/authMeddleware')
router.post ('/crear', crearUser)
router.post ('/login', loginUser)
router.get ('/datos',protect, datoUser)


module.exports= (router)