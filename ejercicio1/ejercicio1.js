// 1. Cambiador de color de fondo
// - Objetivo del ejercicio:
// Practicar eventos en JavaScript y manipulación de estilos del DOM.
// - Ejercicio:
// Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.

const randomColor = () => 
  `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

switchButton.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
});
