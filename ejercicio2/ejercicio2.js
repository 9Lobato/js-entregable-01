// 2. Contador de clics
// - Objetivo del ejercicio:
// Practicar el manejo de eventos y la actualización del contenido del DOM.
// - Ejercicio:
// Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.

const countButton = document.getElementById('clickCount');
const counterSpan = document.getElementById('counter');
let i = 0;
const contar = () => {
    i++;
    return i;
}

countButton.addEventListener('click', () => {
    const recuento = contar();
    counterSpan.textContent = recuento;
});
