//Obtenemos los elementos html del DOM:

const nombre = document.getElementById("campoNombre")
const precio  = document.getElementById("campoPrecio")
const imagen = document.getElementById("campoImagen");
const caja = document.getElementById("contenedorCards")
const form = document.getElementById("formulario")

//Creamos las funciones:

function renderCards() {
    fetch("https://crud-productos-node.onrender.com/productos").then((response) => response.json()).then((data) => {
        caja.innerHTML = ""
        data.map((el) => {
            caja.innerHTML += `<div>
        <img src="${el.imagen}" alt="foto-producto">
        <h3>${el.nombre}</h3>
        <p>${el.precio}</p>
        <button onclick="eliminarCards(${el.id})">Eliminar</button>
    </div>
`
        })
    })
}

function eliminarCards(id) {
     fetch(`https://crud-productos-node.onrender.com/productos/${parseInt(id)}`, {
        method: "DELETE"
     }).then(() => renderCards())
}

//Agregamos los eventos:

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const producto = {
        nombre: nombre.value,
        precio: precio.value,
        imagen: imagen.value
    }

    fetch(`https://crud-productos-node.onrender.com/productos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(producto)
     }).then(() => renderCards())
})

renderCards()

