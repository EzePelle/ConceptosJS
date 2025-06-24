let saldo = 10000;

do{
    const opcion = parseInt(
        prompt(
          "seleccione una opción: 1- consultar saldo, 2- depositar dinero, 3- extraer dinero, 4- salir"
        )
      );
      
      switch (opcion) {
        case 1:
            case 'saldo':
          document.writeln("El saldo es $" + saldo);
          console.log("El saldo es $" + saldo)
          break;
        case 2:
          //mostrar mensaje para que agregue cantidad de dinero a depositar
          const deposito = Number(prompt("ingresa el monto a depositar"));
          console.log('depositaste: '+ deposito);
          // actualizar el saldo y mostrarlo
          saldo = saldo + deposito; //saldo += deposito;
          document.writeln(
            "Depositaste $" + deposito + ", tu saldo actual es de $" + saldo
          );
          console.log( "Depositaste $" + deposito + ", tu saldo actual es de $" + saldo)
          break;
        case 3:
          //mostrar un mensaje que diga cuanto quiero extraer
          const extraccion = Number(prompt("Ingresa el monto a extraer"));
          console.log('Quiero extraer' + extraccion)
          //preguntar si el monto a extraer si no supero el saldo
          if (extraccion <= saldo) {
            //Hago la extraccion y mostrar un cartel al usuario
            saldo = saldo - extraccion; // saldo -=extraccion
            document.writeln(
              `Monto a extraer -$${extraccion}, tu saldo actual es de $${saldo}`
            );
            console.log( `Monto a extraer -$${extraccion}, tu saldo actual es de $${saldo}`)
          } else {
            document.writeln(`Saldo insuficiente`);
            console.log(`Saldo insuficiente`)
          }
          break;
        case 4:
          document.writeln(`Cerrando el sistema...`);
          break;
        default:
          document.writeln(`❌Ingresaste una opción invalida`);
          console.log(`❌Ingresaste una opción invalida`)
        }
    }while(confirm('¿Deseas realizar otra operación?'))



