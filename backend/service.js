const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 1975


// Definir la app con express 
const app = express()
// APP Definido y a imprimir si el puerto conecto 
app.listen(port,()=>console.log(`El servidor jaló en el puerto ${port}`))

app.get('/app', (req, res) => {
    res.send('parece que si funciono')
})