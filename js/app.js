const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.boton--primario');
const formulario = document.querySelector('.formulario');
const texto = document.querySelector('h3');

email.addEventListener('input', leerTexto);
nombre.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault(); // este prevent tambien evita el siguiente listener, interrumpe el envio del formulario
//     console.log('enviando...');
// });
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
      //  console.log('Todos los campos son obligatorios');
        mostrarError('Todos los campos son obligatorios')

        return; //dentro de una funcion corta el codigo y regresa al main (esta dentro del if)
    }

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    console.log('enviando2...');
});
texto.addEventListener('click', function(e) {
    console.log(e);
    console.log('probando');
});

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    

    formulario.appendChild (error);
}

function leerTexto(e) {

    datos[e.target.id] = e.target.value;

    console.log(e.target);

    console.log(datos);
}












