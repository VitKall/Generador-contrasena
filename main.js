let caracter = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = '^TE^IbBp3fY*@I14zCm2lst*Z_s0ññ(T)dDqYij#HJ%n@9Ñ2#p_CyKZx-Uthz)jPLcqWñ¡*fcqiyuH8!#P6rAk8&loañ7pM0WaMVkD16g4ñL$!-Ñ8wBnuK¡1lV-7ÑFoQ5Q33NñOrcRbfGk7s5a9z%j@yt)vd$Nu%4Sm9$h_SX¡&2F!r0ewÑ6^vGbminAxxo&wXvOEUeÑJe5¡d';

function generar() {
    let entradaUsuario = parseInt(cantidad.value);
    let password = ' ';

    if (entradaUsuario < 13) {
        asignarTextoElemento('h1', `Por favor, ingrese`);
        asignarTextoElemento('span', `un número mayor a 12`);
        document.getElementById('borrar').removeAttribute('disabled');
    }

    else {
        for (i = 0; i < entradaUsuario; i++) {
            let aleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += aleatorio;
            contrasena.value = password;

            asignarTextoElemento('h1', `Contraseña`);
            asignarTextoElemento('span', `generada con éxito`);
            document.getElementById('borrar').removeAttribute('disabled');
        }
    }
}

// *** FUNCIONES PARA REINICIAR *** \\

function limpiarCaja() {
    document.querySelector('#cantidad').value = '';
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