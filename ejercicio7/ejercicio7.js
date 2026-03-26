// 7. Generador de contraseñas aleatorias
// - Objetivo del ejercicio:
// Practicar generación de cadenas aleatorias y uso de formularios.
// - Ejercicio:
// Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”.
// • Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.
// • Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.

const longInput = document.getElementById('lenght');
const boton = document.getElementById('button');
const pass = document.getElementById('password');
const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const especiales = "!@#$%^&*()_+[]{}|;:,.<>?";

function generarPassword(longitud) {
    if (!longitud || longitud < 4) {
        return "Error: la longitud debe ser >= 4";
    }
    const caracteres = letras + numeros + especiales;
    let password = "";
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres[indice];
    }
    return password;
}

boton.addEventListener('click', () => {
    const longitud = parseInt(longInput.value);
    pass.textContent = generarPassword(longitud);
});
