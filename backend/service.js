const express = require ('express')
const colors = require('colors')
const cors = require('cors')
const conectdb= require('../backend/config/db')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 1975

conectdb()

// Definir la app con express 
const app = express()
// cosr 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/peli', require ('./routes/peliculasRoutes'))
app.use('/users', require('./routes/usuariosRoutes'))

// APP Definido y a imprimir si el puerto conecto 
app.listen(port,()=>console.log(`El servidor jaló en el puerto ${port}`))



