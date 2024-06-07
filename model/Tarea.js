const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tareaSchema = new Schema({
    titulo: String,
    descripcion: String,
    status: Boolean
}, {versionKey:false})

module.exports = mongoose.model('tareas', tareaSchema)