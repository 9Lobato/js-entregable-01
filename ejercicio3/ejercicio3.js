// 3. Lista dinámica
// - Objetivo del ejercicio:
// Trabajar con la creación, eliminación y manipulación de elementos del DOM.
// - Ejercicio:
// Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
// ● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
// ● Añade un botón al lado de cada elemento para eliminarlo de la lista.

const item = document.getElementById('text');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

let elementos = [];
addButton.addEventListener('click', () => {
    const element = item.value.trim();
    if (element !=="") {
        // 1. Guardar texto en array 'elementos'
        elementos.push(element);
        // 2. Crear elemento 'li' en HTML
        const li = document.createElement('li');
        // 3. Crear botón borrado elemento
        const button = document.createElement('button');
        button.textContent = '-';
        // 4. Crear span con el texto
        const span = document.createElement('span');
        span.textContent = ' ' + element;
        // 5. Añadir botón y texto al li
        li.appendChild(button);
        li.appendChild(span);
        // 6. Añadir a la lista
        list.appendChild(li);
        // 7. Evento para eliminar
        button.addEventListener('click', () => {
            li.remove();
        });
        // 8. Limpiar input
        item.value = "";
    }
});
