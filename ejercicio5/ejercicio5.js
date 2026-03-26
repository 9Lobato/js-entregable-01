// 5. Calculadora sencilla
// - Objetivo del ejercicio:
// Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.
// - Ejercicio:
// Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
// ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones.
// ● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).

const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const resultado = document.getElementById('resultado');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multi = document.getElementById('multi');
const divi = document.getElementById('divi');
// Eventos de botones
suma.addEventListener('click', () => calcular('+'));
resta.addEventListener('click', () => calcular('-'));
multi.addEventListener('click', () => calcular('x'));
divi.addEventListener('click', () => calcular('/'));

const calcular = (operacion) => {
    const a = inputA.value;
    const b = inputB.value;
    if (a === '' || b === '') {
        resultado.textContent = 'Error: introduce ambos números';
        return;
    }
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let res;
    switch(operacion) {
        case '+':
            res = numA + numB;
            break;
        case '-':
            res = numA - numB;
            break;
        case 'x':
            res = numA * numB;
            break;
        case '/':
            if (numB === 0) {
                resultado.textContent = 'Error: división entre 0';
                return;
            }
            res = numA / numB;
            break;
    }
    resultado.textContent = res;
};

const botones = document.querySelectorAll('#calculadora button');
botones.forEach(btn => {
  btn.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
