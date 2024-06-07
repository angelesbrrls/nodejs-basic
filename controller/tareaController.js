const Tarea = require('../model/Tarea')

// Mostrar
module.exports.mostrar = (req, res) => {
    Tarea.find({})
        .then(tareas => {
            return res.render('index',{tareas})
        })
        .catch(error => {
            console.error('Error mostrando las tareas:', error);
            res.status(500).json({ message: 'Error mostrando las tareas' });
        });
}

//Crear
 module.exports.crear = async (req, res)=>{
    const tarea = new Tarea({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        status: false
    })
    await tarea.save()
    .then(() => {
        res.redirect('/')
    })
    .catch(error => {
        console.error('Error mostrando las tareas:', error);
        res.status(500).json({ message: 'Error mostrando las tareas' });
    });
}

//Editar
module.exports.editar =  (req,res)=>{
    const id = req.body.id_editar
    const titulo = req.body.titulo_editar
    const descripcion = req.body.descripcion_editar

    Tarea.findByIdAndUpdate(id, {titulo, descripcion}, {new: true})
    .then(() => {
        res.redirect('/')
    })
    .catch(error => {
        console.error('Error mostrando las tareas:', error);
        res.status(500).json({ message: 'Error mostrando las tareas' });
    });
}


//Editar Estatus
module.exports.editarStatus =  (req,res)=>{
    const id = req.params.id
    const status = true

    Tarea.findByIdAndUpdate(id, {status}, {new: true})
    .then(() => {
        res.redirect('/')
    })
    .catch(error => {
        console.error('Error mostrando las tareas:', error);
        res.status(500).json({ message: 'Error mostrando las tareas' });
    });
}


//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id

    Tarea.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/')
    })
    .catch(error => {
        console.error('Error mostrando las tareas:', error);
        res.status(500).json({ message: 'Error mostrando las tareas' });
    });
}