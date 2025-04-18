//esto es un comentario de una linea - ES6 - 2015

/*esto es un comentario 
de multiples 
lineas */
console.log("hello console")

document.writeln("Hola nuevamente")
// alert("Esto es un mensaje de alert")
// como declarar una variable

let anioActual
//inicializar una variable
anioActual = 2025

document.writeln("El año actual es:  ", anioActual)

const url = "http://127.0.0.1:5500/index.html"

document.writeln("<br>La dirección de live server es: " + url)

//ejemplo de suma de dos numeros
// todo: realizar este codigo con const

const numero1 =parseInt(prompt("Ingrese un numero"))
const numero2 =parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1)
console.log(numero2)

document.writeln("<br> El resultado de la suma es: " + (numero1 + numero2));

//Tipos de datos promitivos
//string
const nombreUsuario = "Ezequiel Pellegrini"
const producto = "Celular"
const tarea = `Realizar el tp 1`
//number
const edad = 30;
const precio = 35.6;
const negativo = -40.6;
//booleanos

const encendido = true
const lavado = false 

//null: es un valor vacio
let vacio = null;
//undefined
let datoNuevo; 

//Tipos de referenciales

//objeto con notacion literal
const funko = {
    nombre: "Ironman",
    precio: 30,
    codigo: "SJ76B"
}

//arrays
const productos = ["celular", "table", "noteebok"]



console.log(nombreUsuario)
console.log(producto)
console.log(tarea)
console.log(edad)
console.log(precio)
console.log(negativo)
console.log(encendido)
console.log(lavado)
console.log(vacio)
console.log(datoNuevo)
console.log(funko)
console.log(productos)


