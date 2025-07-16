//personas: nombre, apellido, dni, mail, edad, estado
//alumno: legajo, curso [], asistencia
class Persona {
  //propiedades metodos
  //propiedades privadas
  #email;
  #nombre;
  #apellido;
  constructor(nombre, apellido, dni, email, edad, estado) {
    //this.clave = valor
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.dni = dni;
    this.#email = email;
    this.edad = edad;
    //propiedades por defecto
    this.estado = true;
  }
  //propiedades computadas
  //get y set
  get getEmail() {
    return this.#email;
  }

  set setEmail(nuevoEmail) {
    this.#email = nuevoEmail;
  }
  
  set setApellido(nuevoApellido){
    this.#apellido = nuevoApellido;
  }

  //metodos
  mostrarDatos() {
    document.writeln(`<ul> 
        <li>Nombre: ${this.#nombre} </li>
        <li>Apellido: ${this.#apellido}</li>
        <li>DNI: ${this.dni}</li>
        <li>Email: ${this.#email}</li>
        <li>Edad: ${this.edad}</li>
        </ul>`);
  }
}

class Alumno extends Persona{
  #curso
  #legajo
  #asistencia
    constructor(nombre, apellido, dni, email, edad, legajo, curso){
         super(nombre, apellido, dni, email, edad)
         this.#curso = curso;
         this.#legajo = legajo;
         this.#asistencia = 0;
    }
    //get y set
    get getCurso(){
      return this.#curso
    }

    set setCurso(nuevoCurso){
    //aquí agregar las validaciones que sean necesarias
    if(nuevoCurso.length >0){
      this.#curso = nuevoCurso
    }
}
get getLegajo(){
  return this.#legajo
}

set setLegajos(nuevoLegajo){
   //aquí agregar las validaciones que sean necesarias
   if(nuevoLegajo.length >0){
    this.legajo = nuevoLegajo 
   }
}
get getAsistencia(){
  return this.#legajo
}

set setAsistencia(nuevaAsistencia){
   //aquí agregar las validaciones que sean necesarias
   if(nuevaAsistencia.length >0){
    this.#asistencia = nuevaAsistencia
   }
}
//metodos
}
//nombre objeto.propiedad
//cuando utilizamos a la clase: CREAR UN OBJETO A INSTANCIAR

const Ezequiel = new Persona(
  "Ezequiel",
  "Pellegrini",
  "44476349",
  "ezequiel_f_pelle@hotmail.com",
  22
);
const Camila = new Persona(
  "Camila",
  "Diaz Varas",
  "43204861",
  "Camiladiazvaras@hotmail.com",
  24
);

console.log(Ezequiel.getEmail);
console.log(Camila);

Ezequiel.setApellido = 'Pellegrini Canz';
Ezequiel.mostrarDatos();
Camila.mostrarDatos();
Camila.email = "Camila123@hotmail.com";
Camila.edad = 25;

Camila.setEmail = "camila1234@hotmail.com";
Camila.mostrarDatos();
