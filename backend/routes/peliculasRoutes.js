const express = require("express");
const router = express.Router();

const {getPeli, createPeli, editPeli, deletePeli} =

// crear las rutas funto con sus metodos 
app.get = ('/peli', getPeli);

app.post = ('/crear', createPeli)

app.put = ('/:id',  editPeli)

app.delete = ('/:id', deletePeli)

module.exports = router