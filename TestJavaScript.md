# Test de Javascript

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.
<br>
<br>
<br>

## Variables y operaciones


*1. Responde las siguientes preguntas en la sección de comentarios:*

- **¿Qué es una variable y para qué sirve?**
		Una variable es un contenedor que me permite almacenar datos en la memoria del computador 
<br>
<br>

- **¿Cuál es la diferencia entre declarar e inicializar una variable?**
		Cuando declaro una variable estoy reservando su nombre en la memoria; cuando la inicializo le estoy asignando el valor que le corresponde a la variable que se declaró
<br>
<br>

- **¿Cuál es la diferencia entre sumar números y concatenar strings?**
		Al ser elementos de tipo diferente (typeOf), JS interpreta diferente el operador "+". Si son elementos de tipo "Number" se suma; si son "String" (textos) concatena ambos elementos
<br>
<br>

- **¿Cuál operador me permite sumar o concatenar?**
		El operador "+"


<br>

*2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:*
- *Nombre:* string
- *Apellido:* string
- *Nombre de usuario en Platzi:* string
- *Edad:* number
- *Correo electrónico:* string
- *Mayor de edad:* boolean
- *Dinero ahorrado:* number
- *Deudas:* number

<br>

*3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios:*
 ```javascript
	var nombre = "Alejandro"
	var apellido = "Naranjo"
	var nombreUsuarioPlatzi = "alejonaranjo83"
	var edad = 39
	var correo = "alejonaranjo83@gmail.com"
	var mayorDeEdad = true
	var dineroAhorado = 1
	var deudas = 0.5
 ```
    

<br>

*4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:*
 
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
```javascript
var nombre = "Alejandro"
var apellido = "Naranjo"
var nombreCompleto = console.log(nombre + " " + apellido)

var dineroAhorrado = 1
var deudas = 0.5
var dineroReal = console.log(dineroAhorrado - deudas)
```

<br>
<br>
<br>

## Funciones

*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es una función?*
		Es una parte del código que me permite ejecutar acciones con valores almacenados en variables.
<br>
<br>

- *¿Cuándo me sirve usar una función en mi código?*
		Cuando voy a repetir varias veces el mismo procedimiento, puedo usar una función para ahorrar espacio.
<br>
<br>

- *¿Cuál es la diferencia entre parámetros y argumentos de una función?*
		Los parámetros están desde la línea en que se define la función (dentro del paréntesis), pueden ser modificados cada vez q se invoque la fxn y ser usados como argumentos de la misma. Los argumentos están dentro de la definición de la fxn y no son visibles al momento de ejecutarse.


<br>

*2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:*

```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
<br>
Respuesta:

```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function mensaje(name, lastname, nickname) {
	const completeName = name + " " + lastname;
	console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```
<br>
<br>
<br>

## Condicionales

*1. Responde las siguientes preguntas en la sección de comentarios:*

- ¿Qué es un condicional?
		Es una parte del código que me permite evaluar diferentes condiciones y en fxn de eso hacer o no alguna cosa.
<br>
<br>

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
		Las condicionales pueden ser: if (evalúa si una condición se cumple... si es "true"), elseif (evalúa dos o más condiciones), else (evalúa si la condición es "false").
		También puedo usar "switch" que evalúa mediante casos, o "while" que evalúa mientras la condición se mantenga "true". 
<br>
<br>

- ¿Puedo combinar funciones y condicionales?
		Si puedo mezclar funciones y condicionales

<br>

*2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:*

```javascript
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
```
<br>
Respuesta

```javascript
const tipoDeSuscripcion = "Basic"
	
if(tipoDeSuscripcion === "Basic") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === "Expert") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion === "ExpertPlus") {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	console.log("Solo puedes tomar los cursos gratis");
}
```

    
<br>

*3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).*
Respuesta
En caso de q se pueda, no sé cómo hacerlo :(
```javascript

```

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

<br>
<br>
<br>

## Ciclos

*1. Responde las siguientes preguntas en la sección de comentarios:*

- ¿Qué es un ciclo?
		Es una parte del código que se repite mientras se mantengan las condiciones fijadas 
<br>
<br>

- ¿Qué tipos de ciclos existen en JavaScript?
		Existen ciclos de tipo "for", "while" o "of"
<br>
<br>

- ¿Qué es un ciclo infinito y por qué es un problema?
		Es un ciclo que nunca se detendrá, por lo cual consumirá capacidad de cálculo del computador y eventualmente lo podrá bloquear o recalentar.
<br>
<br>

- ¿Puedo mezclar ciclos y condicionales?
		Si puedo mezclar ciclos y condicionales

*2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:*
```javascript
for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
<br>
Respuesta:

```javascript
var i=0
while(i<5) {
	console.log("El valor de i es: " + i);
	i++
}

var i=10
while(i>=2) {
	console.log("El valor de i es: " + i);
	i--
}
```


*3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.*
💡 Pista: puedes usar la función prompt de JavaScript.
```javascript



// Intento 2: 
function preguntar (){
	var pregunta = prompt("Cuánto es 2 + 2?")
	return pregunta
}
var pregunta = preguntar()
var respuesta = Number(pregunta)

if(respuesta===4) {
	console.log("Felicitaciones, efectivamente es 4")
} else {
	while(respuesta != 4){
		console.log("revisa tus cálculos")
		preguntar()
		break
	}
}



// Intento 1:
var pregunta = prompt("Cuánto es 2 + 2?")
var respuesta = Number(pregunta)

if(respuesta===4) {
	console.log("Felicitaciones, efectivamente es 4")
} else {
	while(respuesta != 4){
	console.log("revisa tus cálculos")
	pregunta
	break
	}
}


```
<br>
<br>
<br>

## Listas

*1. Responde las siguientes preguntas en la sección de comentarios:*

- ¿Qué es un array?
		Un valor tipo objeto que almacena datos de diferentes tipos en su interior. Datos deben estar separados por comas.
<br>
<br>

- ¿Qué es un objeto?
		Es una colección de propiedades y una propiedad está compuesta de una "key" y un "value" {key: value}
<br>

		```javascript
		objeto = {
			key: value,
			nombre: "Alejandro",
			edad: 39
		}
		```

<br>

- ¿Cuándo es mejor usar objetos o arrays?
		asdasd
<br>
<br>

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
		Sí
<br>

*2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*

```javascript

```
<br>

*3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*

```javascript

```
<br>

*4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*

```javascript

```