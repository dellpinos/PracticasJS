const enlace = document.querySelectorAll('.navegacion a');


    

let acu = 0;

setInterval( () => {
    acu++;
    console.log(acu);
    if( acu > 5) {
        for(x = 0; x < 6; x++) {
            enlace[x].textContent = 'Chanchito Triste';
        }
    }
}, 1000);




