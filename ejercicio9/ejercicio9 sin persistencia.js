// 9. Lista de tareas con LocalStorage
// - Objetivo del ejercicio:
// Practicar persistencia de datos con localStorage.
// - Ejercicio:
// Crea una aplicación de lista de tareas.
// • Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
// • Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
// • Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.

const limpiar = document.getElementById('limpiar');
limpiar.style.display = 'none';

const actualizarBotonLimpiar = () => {
    if (list.children.length > 0) {
        limpiar.style.display = 'block';
    } else {
        limpiar.style.display = 'none';
    }
};

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
        // 3. Crear checkbox elemento
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // 4. Crear span con el texto
        const span = document.createElement('span');
        span.textContent = element + ' ';
        // 5. Añadir botón y texto al li
        li.appendChild(checkbox);
        li.appendChild(span);
        // 6. Añadir a la lista
        list.appendChild(li);
        // 7. Limpiar input
        item.value = "";
        // 8. Botón limpiar visible
        actualizarBotonLimpiar();
    }
});

limpiar.addEventListener('click', () => {
    const items = list.querySelectorAll('li');
    items.forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            li.remove();
        }
    });
    actualizarBotonLimpiar();
});
