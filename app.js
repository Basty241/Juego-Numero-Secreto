let maximoIntentos = 5;
let intentos;
let numeroSecreto;
let numerosJugados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() { 
    return Math.floor(Math.random() * 10 + 1); 
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuarioDoc").value);
    borrarCaja();

    intentos++;

    if (numeroUsuario != numeroSecreto && intentos < 5) {

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El numero secreto es menor a ${numeroUsuario}`);
        } else {
            asignarTextoElemento('p',`El numero secreto es mayor a ${numeroUsuario}`);
        }
    }  else if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero secreto es: ${numeroSecreto}. \n Te tomó ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}` );
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intento").setAttribute("disabled", "" );
    } else {
        asignarTextoElemento('p',`Lo siento, has utilizado el maximo de intentos permitidos: ${maximoIntentos}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intento").setAttribute("disabled", "");
}
}

function borrarCaja(){
    document.getElementById("numeroUsuarioDoc").value = "";
}

function reiniciarJuego() {
    if (numerosJugados.length === 10) {
        document.getElementById("reiniciar").setAttribute("disabled", "" );
        document.getElementById("intento").setAttribute("disabled", "");
        asignarTextoElemento('p', `Ya no quedan numeros disponibles para jugar`);
    } else {
        condicionesIniciales();
        document.getElementById("reiniciar").setAttribute("disabled", "" );
        document.getElementById("intento").removeAttribute("disabled");
        borrarCaja();
}
}
    
function condicionesIniciales() {
    intentos = 0;
    numeroSecreto = generarNumeroSecreto();
    verificarNumerosJugados();
    numerosJugados.push(numeroSecreto);
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Bienvenido al juego del número secreto, tienes ${maximoIntentos} intentos para adivinar el número secreto entre 1 y 10`);
}


function verificarNumerosJugados() {
    while (numerosJugados.includes(numeroSecreto) && numerosJugados.length < 10) {
        numeroSecreto = generarNumeroSecreto();
    }
    
    return numeroSecreto;  

}

condicionesIniciales();

