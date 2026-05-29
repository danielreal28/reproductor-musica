/**
 * RETRO PLAYER - Lógica del sistema de sonido y estilos
 * Propiedad intelectual: zonatrialapp by DanielReal
 */

// Variable de estado para controlar el botón de Play/Pausa
let estaReproduciendo = false;

/**
 * Función encargada de cambiar la apariencia visual (Skin) de la aplicación
 * @param {string} nombreTema - Nombre del skin seleccionado ('retro' o 'neon')
 */
function cambiarSkin(nombreTema) {
  // 1. Limpiamos las clases de temas anteriores asignadas al body
  document.body.classList.remove('theme-retro', 'theme-neon');
  
  // 2. Insertamos la nueva clase de personalización elegida
  document.body.classList.add('theme-' + nombreTema);
  
  // 3. Guardamos permanentemente la elección en la memoria local del dispositivo
  localStorage.setItem('danielreal-skin-preference', nombreTema);
  
  console.log("Skin actualizado con éxito a: " + nombreTema + " por zonatrialapp");
}

/**
 * Función básica interactiva para alternar la animación y estado del reproductor
 */
function togglePlay() {
  const iconoPlay = document.getElementById('icon-play');
  estaReproduciendo = !estaReproduciendo;

  if (estaReproduciendo) {
    // Cambiar vector gráfico a ícono de Pausa
    iconoPlay.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    document.getElementById('track-name').innerText = "AUD-20260527-WA0042.mp3 (Reproduciendo)";
  } else {
    // Cambiar vector gráfico a ícono de Play
    iconoPlay.innerHTML = '<path d="M8 5v14l11-7z"/>';
    document.getElementById('track-name').innerText = "AUD-20260527-WA0042.mp3 (Pausado)";
  }
}

/**
 * Evento cíclico de arranque: Carga el tema guardado la última vez que se usó la app
 */
document.addEventListener("DOMContentLoaded", () => {
  // Consultamos al disco si existe alguna preferencia de color guardada
  const temaPersistente = localStorage.getItem('danielreal-skin-preference');
  
  if (temaPersistente) {
    // Si existe, lo ejecutamos inmediatamente antes de renderizar la vista
    cambiarSkin(temaPersistente);
  } else {
    // De lo contrario, forzamos por defecto tu skin Retro insignia
    cambiarSkin('retro');
  }
});