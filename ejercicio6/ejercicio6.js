// 6. Temporizador con Inicio, Pausa y Reinicio
// - Objetivo del ejercicio:
// Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
// - Ejercicio:
// Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.
// • Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
// • “Pausar” detiene el conteo pero mantiene el tiempo actual.
// • “Reiniciar” pone el temporizador en 00:00:00.

import { timer } from './utils.js';

const miTimer = timer();

const btnStart = document.getElementById('Iniciar');
const btnPause = document.getElementById('Pausar');
const btnReset = document.getElementById('Reiniciar');

btnStart.addEventListener('click', () => miTimer.start());
btnPause.addEventListener('click', () => miTimer.stop());
btnReset.addEventListener('click', () => miTimer.reset());
