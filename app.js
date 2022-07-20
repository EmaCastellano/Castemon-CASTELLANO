const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

let carrito
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )

let stock = []

fetch('./stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data

stock.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Solicitar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})
    })

const agregarAlCarrito = (id) => {
    const item = stock
    .find( (producto) => producto.id === id)
    carrito.push(item)

    Toastify({
        text: `Se agregó 1 unidad de ${item.nombre}`,
        position: 'right',
        gravity: 'bottom',
        duration: 5000,
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    Toastify({
        text: `Se eliminó 1 unidad de ${item.nombre}`,
        position: 'left',
        gravity: 'bottom',
        duration: 5000,
        style: {
            background: "linear-gradient(to right, #f17b5d, #f02f2f)",
        }
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}


const vaciarCarrito = () => {
    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Seguro seguro? Mira que esto es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciame todo',
        cancelButtonText: 'No, mejor no'
    }).then( (result) => {
            if (result.isConfirmed) {
                vaciarCarrito()
                botonCerrar.click()
                Toastify({
                    text: 'Se vació el carrito',
                    position: 'left',
                    gravity: 'bottom',
                    duration: 5000,
                    style: {
                        background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                    }
                }).showToast()
            }
    } )
})



const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    <button  onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}


if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}