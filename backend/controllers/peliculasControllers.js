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

const deletePeli = async (req, res) => {
  try {
      const id = req.params.id;
      const peliculaEliminada = await Pelicula.findByIdAndDelete(id);
      if (!peliculaEliminada) {
          return res.status(404).json({ mensaje: 'La película no  existe (•_•)' });
      }
      res.status(200).json({ mensaje: 'peli eliminada ', pelicula: peliculaEliminada });
  } catch (error) {
      console.error('Error al eliminar la película:', error);
      res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la película' });
  }
};

module.exports = {
  getPeli,
  createPeli,
  deletePeli,
};
