// Seleccionamos el botón por su ID
// Colores para el fondo
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
let colorIndex = 0;

// Datos de los 2 integrantes del equipo
const members = [
    { photo: "img/marcos.png", desc: "Marcos Gomez: Experto en JS, TS, Docker, móviles y cualquier cosa." },
    { photo: "img/emiliano.jpg", desc: "Experto en PHP, Python, Java, AWS y MongoDB pero sin ganas de trabajar." }
];
let memberIndex = 0;

// Botón: cambio de color de fondo
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Botón: alternar entre los 2 integrantes
document.getElementById("switchButton").addEventListener("click", () => {
    memberIndex = (memberIndex + 1) % members.length;
    document.getElementById("member-photo").src = members[memberIndex].photo;
    document.getElementById("member-desc").textContent = members[memberIndex].desc;
});
