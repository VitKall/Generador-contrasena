let caracter = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = '7|/?Q9i:I[#ÑcfE|qOlhcmT;op-&n&.K>boOñpxRn_=j}g>B@yñMC)<Yms1HvG1qG{4D%Wy3]*FLQd$,5IKzw5]aV;dJ8i:@a+%T4,N[H6)k?S/V#SM6UFYJ2{w=X8!E$+<Z}h9.0v(rDXZb!-g20*A3LPRxs_jNftztCekPÑ^r(uWu7AUeBl^';

function generar() {
    let entradaUsuario = parseInt(cantidad.value);
    let password = ' ';

    for (i = 0; i < entradaUsuario; i++) {
        let aleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += aleatorio;
        contrasena.value = password;

        asignarTextoElemento('h1', `Contraseña`);
        asignarTextoElemento('span', `generada con éxito`);
        document.getElementById('borrar').removeAttribute('disabled');
    }
}

// *** FUNCIONES PARA REINICIAR *** \\

function limpiarCaja() {
    document.querySelector('#cantidad').value = '14';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', `Generador`);
    asignarTextoElemento('span', `de contraseña`);
    document.querySelector('#contrasena').value = '';
}

function reiniciar() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#borrar').setAttribute('disabled', 'true');
}

// *** FUNCIÓN PARA CAMBIAR TEXTO *** \\

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}