const modalTarea = new bootstrap.Modal(document.getElementById('modalTarea'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    titulo_editar.value = fila.children[1].innerHTML
    descripcion_editar.value = fila.children[2].innerHTML
    modalTarea.show()
})

