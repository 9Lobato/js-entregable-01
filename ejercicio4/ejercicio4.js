// 4. Filtro de búsqueda en tiempo real
// - Objetivo del ejercicio:
// Practicar la interacción entre eventos del DOM y lógica en JavaScript.
// - Ejercicio:
// Crea una página con un campo de texto y una lista predefinida de elementos.
// ● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.
// Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe quedar visible.

const item = document.getElementById('text');
const list = document.getElementById('list');

item.addEventListener('input', () => {
    const search = item.value.toLowerCase();
    const items = list.querySelectorAll('li');
    items.forEach(li => {
        const texto = li.textContent.toLowerCase();
        if (texto.includes(search)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
});
