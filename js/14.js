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