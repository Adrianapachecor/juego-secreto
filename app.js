let numeroSecreto;
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    } else {
        console.error("Elemento no encontrado:", elemento);
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    let valorCaja = document.getElementById('valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica el número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
