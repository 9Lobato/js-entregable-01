// 8. Contador de palabras y caracteres
// - Objetivo del ejercicio:
// Practicar eventos en tiempo real y manipulación avanzada del DOM.
// - Ejercicio:
// Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
// • Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
// • Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.

const texto = document.getElementById('text');
const palabras = document.getElementById('words');
const caracteres = document.getElementById('characters');

texto.addEventListener('input', () => {
    const valor = texto.value;

    // Contar caracteres (sin espacios ni saltos de línea)
    const charsCount = valor.replace(/\s/g, '').length;
    caracteres.textContent = charsCount;

    // Contar palabras
    const wordsArray = valor.trim().split(/\s+/); // divide por uno o más espacios
    const wordsCount = valor.trim() === "" ? 0 : wordsArray.length;
    palabras.textContent = wordsCount;
});
