// POO
/* Esta es la manera antigua de hacer programación orientada a objetos en JS */


//Object literal
const producto = {
    nombre: 'producto',
    precio: 500
}


//Object constructor
/* Se utiliza como una "Clase", en si es un tipo de objeto que permite servir como base para otros objetos
ademas que permite acceder a sus parametros y modificarlos */
function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}


const producto2 = new Producto('Televisión', 800);
const producto3 = new Producto('Laptop', 500);

console.log(producto2);
console.log(producto3);