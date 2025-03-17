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