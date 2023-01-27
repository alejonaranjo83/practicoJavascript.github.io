// console.log("Esto viene de Javascript como console.log")
// alert("Estos viene de JS como alerta")



// 1. LEER ETIQUETAS DE HTML:

// Debo crear variables q representen elementos del HTML

// Usando "querySelector" me puedo conectar con las etiquetas de HTML utilizando lo mismo que uso en CSS:
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#result")


// En "branch" llamada "clase11" está el código hasta la clase 11, en la cual se estaban explorando posibilidades para escribir contenido desde JS a HTML. A partir de aquí, código se limpia para seguir con otras cosas de manera más organizada.



// 3. EVENTOS

// Para escuchar eventos, puedo hacerlo desde el HTML o el JS. En el primer caso, existen opciones como "onclick / onchange / onsubmit" que asocio a fxnes creadas en JS en las que especifico qué quiero q suceda. Esto puede hacer que el HTML no sea tan limpio

function btnOnClick() {
    // console.log("Escuchando el evento de click")
    
    const sumaInputs = (Number(input1.value) + Number(input2.value))

    pResult.innerText = "El resultado de la operación es " + sumaInputs
}

// function contentChange() {
//     console.log(`Escuchando cambio en el input`)
// }
