const BBDD = [
    {
        "id": 1,
        "nombre": "Moto",
        "descripcion": "Envios de corta distancia",
        "img": "./img/unidad-1.jpeg",
        "precio": 250 + " Por KM",
        "cantidad":1
    },
    {
        "id": 2,
        "nombre": "Utilitario",
        "descripcion": "Envios de corta distancia",
        "img": "./img/unidad-2.jpeg",
        "precio": 500 + " Por KM",
        "cantidad":1
    },
    {
        "id": 3,
        "nombre": "Camioneta",
        "descripcion": "Envios de corta distancia",
        "img": "./img/unidad-3.jpeg",
        "precio": 750 + " Por KM",
        "cantidad":1
    },
    {
        "id": 4,
        "nombre": "Camion",
        "descripcion": "Envios de corta y media distancia",
        "img": "./img/unidad-4.jpeg",
        "precio": 1000 + " Por KM",
        "cantidad":1
    },  
    {
        "id": 5,
        "nombre": "Micro",
        "descripcion": "Viajes de media y larga distancia",
        "img": "./img/unidad-5.jpeg",
        "precio": 1250 + " Por KM",
        "cantidad":1
    },
    {
        "id": 6,
        "nombre": "Camion con acoplado",
        "descripcion": "Envios de larga distancia",
        "img": "./img/unidad-6.jpeg",
        "precio": 2000 + " Por KM",
        "cantidad":1
    },
]

const carrito = [];

let total = 0;

function renderizarProductos(){

    let tienda = document.getElementById('tienda');

    
    BBDD.forEach((e)=>{
        
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>                
                <p class="card-text">${e.descripcion}</p>
                <p>$${e.precio}</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });

}

renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    const btnContratar = document.getElementById('contratar');

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        
    

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);
    
        btnContratar.style.visibility = `visible`;

    }
    
    renderizarCarrito();
}

function renderizarCarrito(){

    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{
        
        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>${producto.descripcion} </p>
                    <p>$${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
                </div>
            </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;

    calcularTotal();
}

function calcularTotal(){

    carrito.forEach((producto) => {
        
        total += producto.precio * producto.cantidad;
    });
    
    console.log(total);

}


const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad); //1
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    renderizarCarrito();
}


const formulario = document.querySelector('#my-form')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputEmail = document.querySelector('#input-email')
const inputCelular = document.querySelector('#input-celular')
const inputPuntoDePartida = document.querySelector('#input-puntoDePartida')
const inputPuntoDeLlegada = document.querySelector('#input-puntoDeLlegada')
const btnEnviar = document.querySelector('#btn-enviar')

btnEnviar.addEventListener('click', () => {
    console.log(inputNombre.value)
    console.log(inputApellido.value)
    console.log(inputEmail.value)
    console.log(inputCelular.value)
    console.log(inputPuntoDePartida.value)
    console.log(inputPuntoDeLlegada.value)
})

const randomColor = () => {
    return Math.round( Math.random() * 255 )
}

btnEnviar.addEventListener('click', () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    btnEnviar.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

function solicitudDeEnviado() {
    alert("Su solicitud fue enviada")
}