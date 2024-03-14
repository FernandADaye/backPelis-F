
const getPeli = (req, res) =>{
    res.status (200).json({mensaje:'todo bien con get peli '})
}
const createPeli = (req, res) =>{
    res.status(201).json({mensaje:'createPeli bien'})
}
const editPeli = (res, req) =>{
    res.status(201).json({mensaje:'editPeli bien'})
}
const deletePeli = () => {
    res.status(200).json({mensaje:'deletePeli bien '})
}

module.exports = {
    getPeli,
    createPeli,
    editPeli,
    deletePeli,
};
