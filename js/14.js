// Arreglos o Arrays

// Sintaxis de los arreglos (Arrays)
const numeros = [10, 20, 30, 40, 50]

console.log(numeros);
console.table(numeros);     // Esto imprime en consola una tabla con los valores dentro del arreglo y sus indices


// Pueden ser creados a partir de un constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');  // Esta manera sigue sin ser la comun

console.table(meses);


/* Los arreglos igual que las variables de javacript son dinamicos, es decir que pueden contener diferentes tipos de
datos sin que entren en conflico por estar en un mismo array */

/* De igual manera dentro de un arreglo es posible introducir como dato, otro arreglo o un objeto */
const arreglo = ["Hola", 10, true, "si", null, {nombre: 'Marcos', trabajo: 'programador'}, [1, 2, 3]];


console.log(arreglo);


// Acceder a los valores de un arreglo

//se pueden acceder a los valores de un arrey mediante sus indices (0,1,2,3...)
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[20]);   // Aqui al tener un indice que no existe dentro del arreglo, retornara un "undefined"


// Extension de un arreglo
console.log(meses.length);


// Recorrer un arreglo
numeros.forEach(function(numero) {
    console.log(numero)
})


// Añadir elementos a un arreglo

numeros.push(60);                   // Añadir al final del arreglo
numeros.unshift(-10, -20, -30);     // Añadir al principio del arreglo

// Eliminar elementos del arreglo

meses.pop();    //Elimina el ultimo elemento de un array
meses.shift();    //Elimina el primer elemento de un array

//Este metodo elimina elementos dependiendo de dos valores (Elemento a eliminar, numero de elementos a eliminar)
meses.splice(0, 1);


// Rest Operator o Spread Operator
/* Una mejor practica para añadir elementos al arreglo, es no modificar el arreglo original, mas bien crear un nuevo
arreglo copiando los elementos del arreglo anterior y a su vez agregando nuevos elementos */

const nuevoArreglo = [...meses, 'Mayo']; // la parte de [...meses,] es donde se copian los elementos del array anterior
const nuevoArreglo2 = ['mayo ', ...meses];
console.log(nuevoArreglo);
console.log(nuevoArreglo2);

console.table(numeros);
console.table(meses);