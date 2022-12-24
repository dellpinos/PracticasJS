

// Eventos de los Input y TextArea

// const nombreFormulario = document.querySelector('#nombre');

// nombreFormulario.addEventListener('input', function(e) {

//     console.log(e.target.value);

// });

//objeto global, va a pasar por mas de una funcion
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

email.addEventListener('input', leerTexto);
nombre.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
   // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(e.target);

    console.log(datos);
}