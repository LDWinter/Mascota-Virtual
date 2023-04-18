// Define los estados iniciales de la mascota
let salud = 100;
let felicidad = 100;
let energia = 100;
let tiempo = 0;

// Selecciona los elementos del DOM
const saludElement = document.querySelector('#salud');
const felicidadElement = document.querySelector('#felicidad');
const energiaElement = document.querySelector('#energia');
const dialogoElement = document.querySelector('#dialogo');

// Función para actualizar los estados de la mascota
function actualizarEstados() {
  saludElement.textContent = salud;
  felicidadElement.textContent = felicidad;
  energiaElement.textContent = energia;
}

// Función para mostrar un mensaje en el cuadro de diálogo
function mostrarDialogo(mensaje) {
  dialogoElement.textContent = mensaje;
  dialogoElement.style.display = 'block';
  setTimeout(function() {
    dialogoElement.style.display = 'none';
  }, 3000);
}

// Agrega un event listener a cada botón
document.querySelector('#alimentar').addEventListener('click', function() {
  if (energia >= 30) {
    salud += 10;
    felicidad += 5;
    energia -= 30;
    mostrarDialogo('¡Gracias por la comida!');
  } else {
    mostrarDialogo('Estoy muy cansado para comer...');
  }
  actualizarEstados();
});

document.querySelector('#jugar').addEventListener('click', function() {
  if (energia >= 20) {
    salud += 5;
    felicidad += 10;
    energia -= 20;
    mostrarDialogo('¡Qué divertido es jugar contigo!');
  } else {
    mostrarDialogo('No tengo suficiente energía para jugar...');
  }
  actualizarEstados();
});

document.querySelector('#dormir').addEventListener('click', function() {
  if (energia < 100) {
    salud += 10;
    felicidad -= 5;
    energia = 100;
    mostrarDialogo('¡Qué bien duermo en tu compañía!');
  } else {
    mostrarDialogo('No tengo sueño ahora...');
  }
  actualizarEstados();
});

// Función para actualizar el tiempo de la mascota
function actualizarTiempo() {
  tiempo += 1;
  if (tiempo % 10 === 0) {
    salud -= 5;
    felicidad -= 5;
    energia -= 5;
    actualizarEstados();
  }
}

// Inicia el intervalo de tiempo
setInterval(actualizarTiempo, 500);
