const Pelicula = require("../models/pelisModels");

const getPeli = async (req, res) => {
    const traerPelis = await Pelicula.find()
    res.status(200).json(traerPelis);
};
const createPeli = async (req, res) => {
    const nuevaPeli= new Pelicula(req.body)
    await nuevaPeli.save();
  res.status(201).json(nuevaPeli);
};

const editPeli = (req, res) => {
  res.status(201).json({ mensaje: "todo bien con peli edit " });
};

const deletePeli = async(req, res) => {
    const{titulo} = req.body
    const userExiste = await Pelicula.findOne({titulo})
if (userExiste) {
    const borrarPelicula = await Pelicula.findById(req.params.id) 
    await Pelicula.deleteOne(borrarPelicula)
    res.status(200).json({id: res.params.id})
}else{
    throw new Error ('no existe eso')
}
};

module.exports = {
  getPeli,
  createPeli,
  editPeli,
  deletePeli,
};
