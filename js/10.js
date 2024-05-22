// objetos
// se puede definir de manera simple como una sola "variable" que contiene dentro mas variables

// Esto es como se declararian variables para un producto de manera general
const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;


// Manera de definir un objeto
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Acceder a un valor dentro de un objeto

console.log(producto.nombreProducto)    // Esto imprimira 'Monitor 20 pulgadas'
console.log(producto.disponible)        // Esto imprimira true
console.log(producto.precio)            // Esto imprimira 300

console.log(producto['nombreProducto']) // Esta es una manera diferente de acceder a un valor



// Añadir o retirar elementos de un objeto

producto.imagen = 'imagen';     // Esto añade un elemento
delete producto.disponible;     // Esto elimina un elemento


console.log(producto);
