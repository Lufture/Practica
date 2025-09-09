// Seleccionamos el botón por su ID
const button = document.getElementById("colorButton");
// Creamos un arreglo con algunos colores
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
// Variable para llevar el control del color actual
let index = 0;
// Agregamos un evento "click" al botón
button.addEventListener("click", function () {
    // Cambiamos el color de fondo del body
    document.body.style.backgroundColor = colors[index];
    // Avanzamos al siguiente color
    index++;
    // Si llegamos al final del arreglo, regresamos al inicio
    if (index >= colors.length) {
        index = 0;
    }
});
