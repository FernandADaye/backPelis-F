const mongoose = require('mongoose')
const pelisSchema = new mongoose.Schema({
        titulo:{
            type: String, 
            unique: true
        },
        genero:{
            type: String, 
        },
        actores:{
            type: String, 
        },
        sinopsis:{
            type: String, 
        },
        poster:{
            type: String, 
        }
    },{
        timestamps:true 
    })

    module.exports = mongoose.model('Pelicula', pelisSchema)
