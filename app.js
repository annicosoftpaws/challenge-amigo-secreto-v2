// Declarar un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Seleccionar elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombre = inputNombre.value;

    // Validar que el campo no esté vacío
    if (nombre === "" || nombre === " ") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregarlo a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = "<li> " + amigoSorteado + " es el amigo secreto! </li>";

    // Limpiar la lista después del sorteo
    amigos = []; // Vaciar el array
    actualizarLista(); // Limpiar la lista en pantalla
}