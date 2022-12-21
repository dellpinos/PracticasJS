// querySelector

const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elementos
heading.textContent = "Hola Mundo";
heading.classList.add('nueva-clase');
console.log(heading);
const heading2 = document.querySelector('.nueva-clase');
heading2.textContent = "Te cambio todo!"

// querySelectorAll

const enlace = document.querySelectorAll('.navegacion a'); // todos los elementos en un array
console.log(enlace);

enlace[1].textContent = 'Chanchito Feliz'; // es basicamente un array, uso indice
enlace[0].href = 'http://google.com';
enlace[0].classList.add('nueva-clase');
enlace[0].classList.remove('navegacion__enlace');

// getElementById
const heading3 = document.getElementById("heading");
heading3.textContent = "Opa!";


// Generar un nuevo enlace con Js

const nuevoEnlace = document.createElement("A");

// agregar href

nuevoEnlace.href = 'http://google.com';


//agregar texto

nuevoEnlace.textContent = 'ANDATE A GOOGLE';

//agregar clase

nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo a documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// eventos

console.log(1);

window.addEventListener('load', function(){  // load espera a q el js y archivos que dependen del html esten listos, imagenes, css etc

    console.log(2);

} )

document.addEventListener('DOMContentLoaded', function () {
    console.log(4);
})

console.log(5);

let acu2 = 0;

window.onscroll = function () {
    console.log('Scrol!');
    acu2++;
    console.log(acu2);
}

