// Arreglo con las URLs de tus imágenes
var imagenes = [
  '../img/beach.png',
  '../img/cerezo.png',
  '../img/gira.png',
  '../img/lake.png',
  '../img/lake2.png'
];

// Índice para la imagen actual mostrada
var indiceImagenActual = 0;

// Función para cambiar a la siguiente imagen
function siguienteImagen() {
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
  document.getElementById('imagen').src = imagenes[indiceImagenActual];
}

// Función para cambiar a la imagen anterior
function anteriorImagen() {
  indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
  document.getElementById('imagen').src = imagenes[indiceImagenActual];
}

// Añadir eventListeners a los botones
document.getElementById('boton-siguiente').addEventListener('click', siguienteImagen);
document.getElementById('boton-anterior').addEventListener('click', anteriorImagen);
