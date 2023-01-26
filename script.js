// console.log("Esto viene de Javascript como console.log")
// alert("Estos viene de JS como alerta")

// Debo crear variables q representen elementos del HTML

// Usando "querySelector" me puedo conectar con las etiquetas de HTML utilizando lo mismo que uso en CSS:
const h1 = document.querySelector("h1");
// Este me muestra todas las etiquetas de ese tipo en un array
const p = document.querySelectorAll("p");
const parrafoClase = document.querySelector(".parrafo-clase");
const parrafoId = document.querySelector("#parrafo-id");
const input = document.querySelector("input")

// Si quiero ver el valor de un elemento en particular
console.log(input.value)

// Si quiero ver todos los elementos en la consola
console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    input
})