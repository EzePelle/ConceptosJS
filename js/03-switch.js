/* 
opcion= "sabado"
switches (opcional){
case "lunes":
    todas las lineas de codigo que quiero hacer si la opcion es lunes
    break;
    case "martes":
        todas las lineas de codigo que quiero hacer si la opcion es martes
        break;

        case "sabado":
            todas las lineas de codigo que quiero hacer si la opcion es sabado
            break;
            default:
                todas las lineas de codigo que quiero hacer si no ingreso ninguna de las opciones anteriores
}
*/

//Ejercisio cajero automatico
//Pedir al usuario que ingrese una opcion: 1- consultar el saldo, 2- depositar dinero, 3- extrar dinero, 4- salir.
const opcion = parseInt(
  prompt(
    "seleccione una opción: 1- consultar saldo, 2- depositar dinero, 3- extraer dinero, 4- salir"
  )
);
let saldo = 10000;

switch (opcion) {
  case 1:
    document.writeln("El saldo es $" + saldo);
    break;
  case 2:
    //mostrar mensaje para que agregue cantidad de dinero a depositar
    const deposito = Number(prompt("ingresa el monto a depositar"));
    console.log(deposito);
    // actualizar el saldo y mostrarlo
    saldo = saldo + deposito; //saldo += deposito;
    document.writeln(
      "Depositaste $" + deposito + ", tu saldo actual es de $" + saldo
    );
    breack;
  case 3:
    //mostrar un mensaje que diga cuanto quiero extraer
    const extraccion = Number(prompt("Ingresa el monto a extraer"));
    //preguntar si el monto a extraer si no supero el saldo
    if (extraccion <= saldo) {
      //Hago la extraccion y mostrar un cartel al usuario
      saldo = saldo - extraccion; // saldo -=extraccion
      document.writeln(
        `Monto a extraer -$${extraccion}, tu saldo actual es de $${saldo}`
      );
    } else {
      document.writeln(`Saldo insuficiente`);
    }
    breack;
  case 4:
    document.writeln(`Cerrando el sistema...`);
    breack;
  default:
    document.writeln(`❌Ingresaste una opción invalida`);
}
