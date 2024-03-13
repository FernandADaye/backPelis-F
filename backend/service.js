const express = require ('express')
const dotenv = require ('dotenv').config()
const PORT = 1975

// Definir la app con express 
const app = express()
// APP Definido y a imprimir si el puerto conecto 
app.listen(PORT,()=>console.log(`El servidor jaló en el puerto ${PORT}`))
