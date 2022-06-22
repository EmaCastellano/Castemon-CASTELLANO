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


/* MODAL */
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})