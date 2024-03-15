
const getPeli = (req, res) =>{
    res.status (200).json({mensaje:'todo bien con get peli '})
}
const createPeli = (req, res) =>{
    res.status (201).json({mensaje:'createPeli bien'})
}

const editPeli = (req, res) => {
    res.status(201).json({mensaje: 'todo bien con peli edit '})

}
const deletePeli = (req, res) => {
    res.status(201).json({mensaje: 'todo bien con peli delete'})

}



module.exports = {
    getPeli,
    createPeli,
    editPeli,
    deletePeli,
};
