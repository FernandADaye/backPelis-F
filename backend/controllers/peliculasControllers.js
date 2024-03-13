
const getPeli = (res, req) =>{
    res.status(200).json({mensaje:'getPeli bien'})
}
const createPeli =(res, req) =>{
    res.status(201).json({mensaje:'createPeli bien'})
}
const   editPeli =(res, req) =>{
    res.status(201).json({mensaje:'editPeli bien'})
}
const deletePeli =(res, req) =>{
    res.status(200).json({mensaje:'deletePeli bien '})
}


module.exports = {
    getPeli,
    createPeli,
    editPeli,
    deletePeli,
};
