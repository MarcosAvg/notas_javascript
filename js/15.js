// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


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
//Este se ejecuta al menos una vez por cada elemento que haya en el array

meses.forEach(function(mes) {
    console.log(mes);
    if(mes === 'Marzo'){
        console.log('Marzo si existe');
    }
})


// Includes
//Este metodo retorna un valor de true o false en caso de que en el arrar seleccionado
let resultado = meses.includes('Marzo');
console.log(resultado);


//Some
//Ideal para arreglos de objetos, funciona como Includes pero para arrays
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
})


// Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0)



//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
})

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
})

console.log(resultado);