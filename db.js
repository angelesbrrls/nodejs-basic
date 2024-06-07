const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_tareas'

mongoose.connect(url)
 .then(() => console.log('Connected!'));


const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback(){
    console.log("¡Conectado a MongoDB!")
})

module.exports = db