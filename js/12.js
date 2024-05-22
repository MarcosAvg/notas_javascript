"use strict";   //Hace que el uso de JS sea estricto y siga las buenas practicas

// Objetos
/* En JS los objetos no se comportan de manera normal con el uso de const, estos permiten ser modificados aunque esten 
definidos como const, para ello se utilizan metodos darles un comportamiento adecueado, si esto es lo que se adecua el codigo */

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const producto2 = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}


// "Congela" el objeto para que no pueda ser modificado posteriormente
Object.freeze(producto);

//producto.imagen = "imagen"; // Esto dara un error en consola, ya que se intenta añádir a un objeto "congelado"

// Este metodo retorna un valor booleano (true o false) dependiendo si el objeto en cuestion esta "congelado"
console.log(Object.isFrozen(producto));


// Similar a freeze, pero con la posibilidad de modificar el valor de las propiedades
Object.seal(producto2);

producto2.precio = 'trecientos';


console.log(producto);
console.log(producto2);