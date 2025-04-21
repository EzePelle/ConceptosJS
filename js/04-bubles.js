//Estructuras de repetición

//Bucle while - Do-while - for

/*
mientras se cumplen una condicion logica

while (condicion logica){
todas las lineas de codigo que quiero repetir
agregar una linea que haga que la condicion logica se deje de cumplir
}
*/

let renglon = 1;

while( renglon <=50){
    document.writeln(`<p> Renglon numero ${renglon} </p>`)
    renglon = renglon + 1;
}

/*
Bucle do-while
hacer - mientras se cumple la condicion logica
do-while

do{
todas las lineas de codigo que quiero repetir
agregar una linea que haga que la condicion logica se deje de cumplir
}while(condicion logica) (siempre se repite por lo menos una vez)
*/

let línea = 1

do{
    document.writeln(`<p>Linea número: ${línea}</p>`)
    línea++;
}while(línea<=50)