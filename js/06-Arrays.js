// Declarar un Array vacío
const paises = [ ]
//Array con datos
const comidas = ['🍔', 2, true, 'pizza']

//Declaracion de funciones
function listarComidas(titulo){
    document.writeln(`<h3>${titulo}</h3>`)
    document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)

}

//Mostrar el Array
console.log(paises)
console.log(comidas)

// Mostrar Array en el HTML
document.writeln(comidas)
document.writeln(paises)
document.writeln('<br>Cantidad de elementos en el array: ' + comidas.length)

listarComidas('Mostrar el ARRAYs de comidas')

//Agregar elementos al Array
comidas.unshift('🍟', '🍕') 
listarComidas('Agregar un elemento al principio del array')



comidas.push('🥗')
listarComidas('Agregar un elemento al final del array ')


document.writeln('<h3>Agregar un elemento en el medio del array </h3>')
comidas.splice(3,0,'🥐')
document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)

document.writeln('<h3>Borrar un elemento al principio del array </h3>')
comidas.shift()
document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)

document.writeln('<h3>Borrar un elemento al final del array </h3>')
comidas.pop()
document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)

document.writeln('<h3>Borrar un elemento en el medio del array </h3>')
comidas.splice(3,1)
document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)


document.writeln('<h3>Modificar un elemento de array</h3>')

comidas[5] = '🍞'
document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++){ 
document.writeln(`<li> ${ comidas[i]} </li> `)
}
document.writeln(`</ul>`)

//Como sabemos si existen un dato en el array
const hamburguesa = comidas.find((comida) => comida === '🍔' )
const hamburguesaPosition = comidas.findIndex((comida) => comida === '🍔' )
console.log(hamburguesa)
console.log('Indice de la hamburguesa ' + hamburguesaPosition)
//Undefined
const ensalada = comidas.find((comida) => comida === '🥗' )
const ensaladaPosition = comidas.findIndex((comida) => comida === '🥗' )
console.log(ensalada)
console.log('Indice de la ensalada ' + ensaladaPosition)








