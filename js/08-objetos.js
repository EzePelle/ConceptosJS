//Notación literal - esto uso cuando voy a crear un objeto.
const usuario = {
    //propiedades o atributos
    //Nombre, nombre usuario, apellido email, DNI, id o legajo, github, telefono, fotoperfil estado 

nombreUsuario: 'Ezequiel01',
nombre: 'Ezequiel',
apellido: 'Pellegrini',
email: 'ezequiel_f_pelle@hotmail.com',
dni: '44476349',
id: 23,
estado: true,

    //metodos
     nombreCompleto: function (){
      console.log(this)
        document.writeln(`<p>Hola soy ${this.nombre}, ${this.apellido}</p>`)
     },
     cambiarEstado: () =>{
        document.writeln('<p>Aquí tengo que cambiar el estado</p>')
     }
}
//Mostrar un objeto
console.log(usuario)
document.writeln(usuario+'<br>')

//mostrar propiedades de un objeto
document.writeln(usuario.nombreUsuario)
document.writeln(`<p>El dni del usuario es: ${usuario.dni}`)
document.writeln(`<p>El email del usuario es: ${usuario['email']}</p>`)

 //modificar una propiedad de un objeto
 // mal => usuario = 'ezequiel02'
 usuario.nombreUsuario = 'ezequiel02'
 document.writeln(`<p>el usuario es: ${usuario.nombreUsuario} </p>`)

 //agregar una propiedad al objeto
 usuario.github =' http://127.0.0.1:5500'
 document.writeln(`<p>El link de github de mi usuario es ${usuario.github}</p>`)

 //norrar una propiedad del objeto
 delete usuario.github
 document.writeln(`<p>El link de github de mi usuario es ${usuario.github}</p>`)

usuario.nombreCompleto()
usuario.cambiarEstado();
//clases