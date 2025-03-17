// Declarar un array vacío para almacenar los nombres de los amigos
let amigos = [];

const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar amigos
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Capturar y limpiar espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar al array
    actualizarLista(); // Mostrar en pantalla
    inputNombre.value = ""; // Limpiar input
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto! 🎁</li>`;
}

// Función para limpiar la lista
function limpiarLista() {
    amigos = []; // Vaciar el array
    listaAmigos.innerHTML = ""; // Limpiar la lista en pantalla
    resultado.innerHTML = ""; // Limpiar el resultado
}