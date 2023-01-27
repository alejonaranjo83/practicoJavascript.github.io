// console.log("Esto viene de Javascript como console.log")
// alert("Estos viene de JS como alerta")



// 1. LEER ETIQUETAS DE HTML:

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



// 2. INSERTAR CONTENIDO EN HTML DESDE JS

// h1.innerHTML = "Título cambiado desde JS"

// Esta forma genera más peligros para los usuarios:
// h1.innerHTML = "Título al que le meto una etiqueta <p>RIESGO</p> elemento desde JS"

// Es más seguro usar:
h1.innerText = "Título más seguro <p> MENOS RIESGO</p> desde JS"

// Si quiero darle una clase al elemento HTML:
console.log(h1.getAttribute("pantalla"))

// Puedo modificar atributo de etiqueta del HTML (lo veo en "Elements" del navegador):
h1.setAttribute("pantalla", "cambiado")

// Puedo añadirle atributo:
h1.classList.add("otro")
h1.classList.add("otro2")

// O removerlo:
h1.classList.remove("otro")

// También está ".toggle" y ".contains"

// Añadir contenido a un input:
input.value = "5678"


// Si quiero crear un elemento desde 0 en JS:
//      a. Creo elemento
const img = document.createElement("img")
//      b. Especifico de dónde lee imagen
img.setAttribute("src", "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

// Puedo eliminar contenido previo del HTML para q se quede solo lo q inserté desde JS
parrafoId.innerText = " "

// console.log(img)
//      c. Añado ese elemento a una etiqueta de HTML
parrafoId.append(img)
