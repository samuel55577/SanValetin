
const sonido = new Audio('sonido.mp3'); // Cambia "sonido.mp3" por tu archivo de sonido

function voltearCarta(elemento) {
    elemento.classList.toggle("volteada");
    sonido.play(); // Reproduce el sonido cuando se voltea la carta
}
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 500);
setInterval(() => {
    const cartas = document.querySelectorAll(".carta");
    const randomCarta = cartas[Math.floor(Math.random() * cartas.length)];
    randomCarta.classList.toggle("volteada");
}, 5000); // Se voltea cada 5 segundos

function cambiarMensaje(carta) {
    let nuevoMensaje = prompt("Escribe tu frase personalizada:");
    if (nuevoMensaje) {
        carta.querySelector(".atras p").innerText = nuevoMensaje;
    }
}
