window.onload = function () {
let audioActual = null;

function reproducir(cancion, caratula) {
  detenerAudioAnterior();
  limpiarReproductor();
  crearReproductor(cancion);
  cambiarFondo(caratula);
  reproducirNuevoAudio(cancion);
}

function detenerAudioAnterior() {
  if (audioActual) {
    audioActual.pause();
    audioActual.currentTime = 0;
  }
}

function limpiarReproductor() {
  const contenedor = document.getElementById("containerReproductor");
  contenedor.innerHTML = "";
}

function crearReproductor(cancion) {
  const contenedor = document.getElementById("containerReproductor");
  const reproductor = document.createElement("audio");
  reproductor.classList.add("reproductor");
  reproductor.id = cancion;
  reproductor.src = "music/" + cancion;
  reproductor.controls = true;
  contenedor.appendChild(reproductor);
}

function cambiarFondo(caratula) {
  document.body.style.background = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(images/caratulas/${caratula})
  `;
  document.body.style.backgroundSize = "50% ";

}

function reproducirNuevoAudio(cancion) {
  const nuevoAudio = document.getElementById(cancion);
  nuevoAudio.play();
  audioActual = nuevoAudio;
}


  window.reproducir = reproducir;
};


