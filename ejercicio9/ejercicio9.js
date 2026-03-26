// 9. Lista de tareas con LocalStorage
// - Objetivo del ejercicio:
// Practicar persistencia de datos con localStorage.
// - Ejercicio:
// Crea una aplicación de lista de tareas.
// • Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
// • Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
// • Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.

// Cargar etado LocalStorage
const cargarDesdeLocalStorage = () => {
    const data = localStorage.getItem('tareas');
    if (data) {
        elementos = JSON.parse(data);
        elementos.forEach(tarea => {
            crearElementoHTML(tarea);
        });
    }
};

// Guardar estado LoalStorage
const guardarEnLocalStorage = () => {
    localStorage.setItem('tareas', JSON.stringify(elementos));
};

// Botón limpiar elementos finalizados
const list = document.getElementById('list');
const limpiar = document.getElementById('limpiar');
limpiar.style.display = 'none';

const actualizarBotonLimpiar = () => {
    if (list.children.length > 0) {
        limpiar.style.display = 'block';
    } else {
        limpiar.style.display = 'none';
    }
};

// Crear tareas
const crearElementoHTML = (tarea) => {
    // 1. Crear elemento 'li' en HTML
    const li = document.createElement('li');
    // 2. Crear checkbox elemento
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada;
    checkbox.addEventListener('change', () => {
        tarea.completada = checkbox.checked;
        guardarEnLocalStorage();
    });
    // 3. Crear span con el texto
    const span = document.createElement('span');
    span.textContent = tarea.texto + ' ';
    // 4. Añadir botón y texto al li
    li.appendChild(checkbox);
    li.appendChild(span);
    // 5. Añadir li a la lista
    list.appendChild(li);
};

// Guardar elementos en array
const item = document.getElementById('text');
const addButton = document.getElementById('addButton');

let elementos = [];
addButton.addEventListener('click', () => {
    const texto = item.value.trim();
    if (texto !=="") {
        const tarea = {
            texto: texto,
            completada: false
        };
        elementos.push(tarea);
        crearElementoHTML(tarea);
        guardarEnLocalStorage();
        item.value = "";
        actualizarBotonLimpiar();
    }
});

// Utilizar botón limpiar elementos finalizados
limpiar.addEventListener('click', () => {
    elementos = elementos.filter(tarea => !tarea.completada);
    list.innerHTML = '';
    elementos.forEach(tarea => {
        crearElementoHTML(tarea);
    });
    guardarEnLocalStorage();
    actualizarBotonLimpiar();
});

// Inicialización
cargarDesdeLocalStorage();
actualizarBotonLimpiar();
