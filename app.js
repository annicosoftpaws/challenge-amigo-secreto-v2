// Declarar un array vacío para almacenar los nombres de los amigos
let amigos = [];

const inputNombre = document.getElementById("amigo");

// Función para agregar amigos
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Capturar y limpiar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Seleccionar la lista del DOM
const listaAmigos = document.getElementById("listaAmigos");

// Función para actualizar la lista en pantalla
function actualizarLista() {
    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregarlo a la lista
    }
}