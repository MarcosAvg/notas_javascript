// Spread operator
/* No es una buena practica modificar un objeto agregando valores de un segundo objeto (producto.peso = '1kg';) 
para eso se utiliza el spread operator, este "unifica dos o mas objetos en un objeto nuevo"*/

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Estructura de un objeto utilizando spread operator, los objetos a unificar estan dentro de {...objeto, ...objeto}
const nuevoProducto = {...producto, ...medidas}

console.log(producto);
console.log(nuevoProducto); //visualización del nuevo objeto creado a partir de un spread operator
