# Test de Javascript

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.
<br>

### Variables y operaciones

####1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
		Una variable es
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
		asd
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
		asdads
- ¿Cuál operador me permite sumar o concatenar?
		asdasd


<br>
####2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
- Nombre
- Apellido
- Nombre de usuario en Platzi
- Edad
- Correo electrónico
- Mayor de edad
- Dinero ahorrado
- Deudas

<br>
####3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios:

    

<br>
####4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

<br>
<br>
<br>

### Funciones

####1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
		asdasd
- ¿Cuándo me sirve usar una función en mi código?
		asdasd
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
		asdasd


<br>
####2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

<br>
<br>
<br>

### Condicionales

####1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
		asdasd
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
		asdasd
- ¿Puedo combinar funciones y condicionales?
		asdasd

####2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";
    
    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }

####3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
<br>
<br>
<br>

### Ciclos

####1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
		asdasd
- ¿Qué tipos de ciclos existen en JavaScript?
		asdasd
- ¿Qué es un ciclo infinito y por qué es un problema?
		asdasd
- ¿Puedo mezclar ciclos y condicionales?
		asdasd

####2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }

####3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

<br>
<br>
<br>

### Listas

####1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
		asdasd
- ¿Qué es un objeto?
		asdasd
- ¿Cuándo es mejor usar objetos o arrays?
		asdasd
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
		asdasd
<br>

####2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
<br>

####3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
<br>

####4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).