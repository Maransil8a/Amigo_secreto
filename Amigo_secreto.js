let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputNombre.value = '';  // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido y único.");
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiar la lista anterior

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Por favor, ingresa al menos un nombre.");
        return;
    }

    const resultado = document.getElementById('resultado');
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
