const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas 500', precio: 300},
    {nombre: 'Laptop', precio: 800}
]


//forEach
// este se utiliza para iterar los elementos de un arreglo, para mostrarlos en consola o guardarlos
// Es por eso que al almacenarlo en una variable, esto se mostrara como undefined
const arreglo1 = carrito.forEach(producto => producto.nombre);


//map
// Este se utliza para crear un nuevo arreglo
// Mientras que con Map se craera un nuevo arreglo si se guarda en una variable
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo1);
console.log(arreglo2);
