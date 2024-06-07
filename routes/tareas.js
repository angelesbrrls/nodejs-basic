const express = require('express')
const router = express.Router()

const tareaController = require('../controller/tareaController')

//Mostrar todos las tareas (GET)
router.get('/', tareaController.mostrar)
//Crear tarea (POST)
router.post('/crear', tareaController.crear)
//Editar tarea (POST)
router.post('/editar', tareaController.editar)
//Borrar tarea (GET)
router.get('/borrar/:id', tareaController.borrar)
//Editar tarea (POST)
router.get('/editarStatus/:id', tareaController.editarStatus)

module.exports = router