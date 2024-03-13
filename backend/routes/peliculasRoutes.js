const express = require('express');
const router = express.Router();
const {getPeli, createPeli, editPeli, deletePeli} = require ('../controllers/peliculasControllers')

// crear las rutas funto con sus metodos 
router.get('/getPeli', getPeli);

router.post('/crear', createPeli)

router.put('/:id',  editPeli)

router.delete('/:id', deletePeli)

module.exports = router