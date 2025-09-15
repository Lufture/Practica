// Colores para el fondo (manteniendo idea de linterna/neón)
const colors = [
    'radial-gradient(circle at top left, #0f0c29, #302b63, #24243e)', // azul oscuro
    'radial-gradient(circle at top left, #20002c, #744c84ff, #6e48aa)', // morado neón
    'radial-gradient(circle at top left, #0f2727ff, #203a43, #2c6457ff)', // verde-azul oscuro
    'radial-gradient(circle at top left, #441521ff, #8f3963ff, #4c2649ff)', // gris-azulado
    'radial-gradient(circle at top left, #0d0d0dff, #281a2eff, #3a1647ff)'  // clásico azul oscuro
];
let colorIndex = 0;

// Datos de los 2 integrantes
const members = [
    { photo: "img/marcos.png", desc: "Marcos Gomez: Experto en JS, TS, Docker, móviles y cualquier cosa." },
    { photo: "img/emiliano.jpg", desc: "Emiliano Val: Experto en PHP, Python, Java, AWS, MongoDB y más." }
];
let memberIndex = 0;

// Botón: cambio de color de fondo
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Botón: alternar entre los 2 integrantes y cambiar texto
const switchButton = document.getElementById("switchButton");
switchButton.addEventListener("click", () => {
    memberIndex = (memberIndex + 1) % members.length;
    document.getElementById("member-photo").src = members[memberIndex].photo;
    document.getElementById("member-desc").textContent = members[memberIndex].desc;

    // Cambiar texto según integrante
    switchButton.textContent = memberIndex === 0 ? "Mostrar Alumno 2" : "Mostrar Alumno 1";
});

// Función para mostrar la hora actual en tiempo real
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("current-time").textContent = `Hora actual: ${hours}:${minutes}:${seconds}`;
}
// Actualiza la hora cada segundo
setInterval(updateTime, 1000);
updateTime(); // llamada inicial

