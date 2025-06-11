//Sintaxis; Funcion tradicional, expresión de función, arrow functions

//Funciones sin parametros.
function saludar() {
  //todas las lineas de código que quiero ahcer para saludar
  document.writeln("<p>Hola mundo 🌎 </p>");
}
//Funciones con parametros.
function sumar(numero1, numero2) {
  const resultado = numero1 + numero2;
  document.writeln(`<p>Resultado de la suma: ${resultado} </p>`);
}
//Funciones que retornan un valor.
/*function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2
    console.log(resultado)
    return resultado
}*/

const multiplicar = (numero1, numero2) =>{
    return numero1 * numero2
}

//Invocar o llamar a una función
saludar();

const numero1 = parseInt(prompt("Ingresa un número"));
const numero2 = parseInt(prompt("Ingresa un número"));

sumar(numero1, numero2);
sumar(numero1, 10);

const resultado = multiplicar(numero1, numero2);
document.writeln('El resultado de la multiplicación es: ' + resultado);
