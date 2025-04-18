//Estructura de desicion

/*
condicional simple
if(condicion logica){
todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}

condicional doble
if(condicional logica){
todas las lineas de codigo que quiero ejecutar si se cumple la condicion
 }else{
todas las lineas de codigo que quiero ejecutar si no se cunple la condicion
}

if(condicion logica){
todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else-if(condicion logica 2){
todas las lineas de codigo que quiero ejecutar si no se cunple la condicion
}
*/

// let edad = parseInt(prompt("Ingresa tu edad"))

// if(edad>=18){
// document.writeln("Sos mayor de edad")
// } else{
//     document.writeln("No sos mayor de edad");
// }

//desde 18 años hasta 75 años es obligatorio
//si la persona tiene 16 o 17 años es opcional, desde 76 años en adelante tambien es opcional
//menores de 16 años no pueden votar

const edad = parseInt(prompt("Ingrese su edad"));
// console.log(isNaN(edad))
//isNaN("hola")=true
//isNaN("10")=false
//si no es un numero la edad el usuario
//la edad del usuario es un numero?
if (!isNaN(edad)) {
  if (edad >= 18 && edad <= 75) {
    document.writeln("Estas obligado a votar");
  } else if (edad === 16 || edad === 17 || edad > 75) {
    document.writeln("Es opcional que votes");
} else {
  document.writeln("No puedes votar");
} 
} else {
    document.writeln("Ingresaste un valor invalido");
}
