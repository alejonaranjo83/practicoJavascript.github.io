# Test de Javascript

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.
<br>
<br>
<br>

## Variables y operaciones


*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es una variable y para qué sirve?*
		Una variable es un contenedor que me permite almacenar datos en la memoria del computador 
<br>

- *¿Cuál es la diferencia entre declarar e inicializar una variable?*
		Cuando declaro una variable estoy reservando su nombre en la memoria (let nombreVariable); cuando la inicializo le estoy asignando el valor que le corresponde a la variable que se declaró (nombreVariable = "xyz"). Si le cambio el valor a la variable se llama "reinicializar".
<br>

- *¿Cuál es la diferencia entre sumar números y concatenar strings?*
		Al ser elementos de tipo diferente (typeOf), JS interpreta diferente el operador "+". Si son elementos de tipo "Number" se suma; si son "String" (textos) concatena ambos elementos
<br>

- *¿Cuál operador me permite sumar o concatenar?*
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
let nombre = "Alejandro"
let apellido = "Naranjo"
let nombreUsuarioPlatzi = "alejonaranjo83"
let edad = 39
let correo = "alejonaranjo83@gmail.com"
let esMayorDeEdad = true
let dineroAhorado = 1
let deudas = 0.5
 ```

<br>

*4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:*
 
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
```javascript
let nombre = "Alejandro"
let apellido = "Naranjo"
let nombreCompleto = console.log(nombre + " " + apellido)

let dineroAhorrado = 1
let deudas = 0.5
let dineroReal = console.log(dineroAhorrado - deudas)
```

<br>
<br>
<br>

## Funciones

*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es una función?*
		Algo que me permite ejecutar acciones con partes del código que están en su interior. Encapsula bloques de código para que sean reutilizables y ejecutables en el futuro.
<br>

- *¿Cuándo me sirve usar una función en mi código?*
		Cuando voy a repetir varias veces el mismo procedimiento. También puedo usarla para ahorrar espacio y darle orden al código, lo cual facilita su lectura.
<br>

- *¿Cuál es la diferencia entre parámetros y argumentos de una función?*
		Los parámetros son las variables que la fxn espera y se definen al crearla (no se ven al ejecutarse). Los argumentos son los datos que se invocan en la fxn al momento de ejecutarla (dentro del paréntesis) y pueden ser modificados cada vez q se invoque.
		Cuando ejecuto la fxn envío argumentos, pero cuando la creo necesito definir los parámetros.
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

**Respuesta:**

```javascript
function nombreCompleto(name, lastname) {
	return name + " " + lastname
}

function saludo(name, lastname, nickname) {
	const completeName = nombreCompleto(name, lastname);
	console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```
<br>
<br>
<br>

## Condicionales

*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es un condicional?*
		Es la forma en que ejecuto un bloque de código u otro, dependiendo de alguna condición.
<br>

- *¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?*
		Las condicionales pueden ser: if (evalúa si una condición se cumple... si es "true"), elseif (evalúa dos o más condiciones), else (evalúa si la condición es "false"). 
		
		También puedo usar "switch" que evalúa mediante casos. 
		
		En el caso de los "IF/ELSEIF/ELSE", estos nos permiten hacer validacioes distintas en cada validación o condicional si así se quiere. En el switch por su parte, todos los casos (o validaciones) se compraran con la misma variable o condición definida dentro del mismo. 

<br>

- *¿Puedo combinar funciones y condicionales?*
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

**Respuesta:**

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

**Respuesta:**

```javascript

function conseguirTipoSuscripcion(suscripcion) {
	if(suscripcion === "Basic") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		return;
	} if(suscripcion === "Expert") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
		return;
	} if(suscripcion === "ExpertPlus") {
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
		return;
	} if(suscripcion === "Free") {
		console.log("Solo puedes tomar los cursos gratis");
		return;
	}
}

conseguirTipoSuscripcion("Free")
```
<br>
<br>

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js

function conseguirTipoSuscripcion(suscripcion) {
	// Utilizo el argumento de la fxn (el tipo de suscripción) para q me devuelva el "value" asociado a esa "key"
	if(tiposDeSuscripciones[suscripcion]) {
		console.log(tiposDeSuscripciones[suscripcion]);
		return;
	}

	console.warn("Ese tipo de suscripción no existe")
}

// Un objeto cuyos "keys" son el nombre de las suscripciones y los "values", el mensaje q verá el usuario asociado a c/u
const tiposDeSuscripciones = {
	free: "Solo puedes tomar los cursos gratis",
	basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
	expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
	expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

conseguirTipoSuscripcion("free")

conseguirTipoSuscripcion("cualquier nombre")

```

<br>
<br>
<br>

## Ciclos

*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es un ciclo?*
		Es una parte del código que se repite mientras se mantengan las condiciones fijadas.

		<br>

		La forma de ejecutar un bloque de código hasta que se cumpla una condición.
<br>

- *¿Qué tipos de ciclos existen en JavaScript?*
		Existen ciclos de tipo "for", "while" y "of". También está el "do while" (que no conozco), el cual en la primer validación no hace la validación (ejecuta primera vez el código pero sin validar).
<br>

- *¿Qué es un ciclo infinito y por qué es un problema?*
		Es un ciclo que nunca se detendrá, por lo cual consumirá capacidad de cálculo del computador y eventualmente lo podrá bloquear o recalentar.
<br>

- *¿Puedo mezclar ciclos y condicionales?*
		Si puedo mezclar ciclos y condicionales

<br>
<br>

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

**Respuesta:**

```javascript
let i=0
while(i < 5) {
	console.log("El valor de i es: " + i);
	i++
}

let i=10
while(i >= 2) {
	console.log("El valor de i es: " + i);
	i--
}
```


*3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.*
💡 Pista: puedes usar la función prompt de JavaScript.

**Mi solución inicial**

```javascript
let resultado = prompt("¿Cuanto es 2 + 2?")

while(resultado != 4){
    resultado = prompt("¿Cuanto es 2 + 2?")
}

alert("Felicitaciones!!");
```

<br>
<br>
<br>

## Listas

*1. Responde las siguientes preguntas en la sección de comentarios:*

- *¿Qué es un array?*
		Es una lista de elementos. Almacena datos de diferentes tipos en su interior y c/u debe estar separados por comas.

<br>

```js
	const array = [1, "Alejo", true, 345]
```

<br>

- *¿Qué es un objeto?*
		Es una lista de elementos pero cada elemento tiene un nombre. Es una colección de propiedades y una propiedad está compuesta de una "key" y un "value" {key: value}
<br>

```javascript

objeto = {
	key: value,
	nombre: "Alejandro",
	edad: 39
}

```


<br>

- *¿Cuándo es mejor usar objetos o arrays?*
		Si voy a hacer lo mismo con todos los elementos, basta con un array. Pero cuando necesito almacenar los elementos en fxn de sus claves para hacer diferentes cosas.
<br>

- *¿Puedo mezclar arrays con objetos o incluso objetos con arrays?*
		Sí
<br>

*2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*

```javascript
function ejercicio(arreglo) {
	console.log(arreglo[0])
}

let arreglo = ["a", "b", "c" , "d", "e"]

ejercicio(arreglo)
```
<br>

*3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*

```javascript
function ejercicio(arreglo) {
	for(let i=0; i<arreglo.length; i++)
		console.log(arreglo[i])
}

let arreglo = ["a", "b", "c" , "d", "e"]

ejercicio(arreglo)
```
<br>

*4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*

```javascript
let objeto = {
	nombre: "Alejandro", 
	apellido: "Naranjo", 
	edad: 39, 
	aprendiz: true,

	impreValores: function(){
		console.log(this.nombre)
		console.log(this.apellido)
		console.log(this.edad)
		console.log(this.aprendiz)
	}
}

objeto.impreValores()
```

<br>

**Otra manera** propuesta por profe del curso y que me parece mejor que la mía (es más versatil pq no tengo q ir a la definición de la fxn): convertir en array los valores de las propiedades del objeto usando propiedad "Object.values" (también existe "Object.keys")

```js
let objeto = {
	nombre: "Alejandro", 
	apellido: "Naranjo", 
	edad: 39, 
	aprendiz: true
}

function imprimirValoresObjeto(objeto) {
	const arr = Object.values(objeto)
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

imprimirValoresObjeto(objeto)

```