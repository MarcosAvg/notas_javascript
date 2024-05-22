//strings
/* El uso de las comillas dobles <<"">> o comillas sencillas <<''>> es indistinto para el string solo se debe cerciorar 
que no se utilizen mezcladas en una misma variable <<let string = "string';>> ya que esto dara un error en el codigo */

const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor 30 pulgadas');
const producto3 = new String('Monitor de 30 pulgadas'); // Esto trata el string como objeto

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);  // "typeof" muestra el tipo de dato

// Cuando se quieren utilizar comillas dobles dentro de una string  se tiene que escapar esa comilla
const producto4 = "Monitor de 20\"";

// Sin embargo para las comillas simples dentro de una doble no es necesario y viceversa
const comillas = "'comillas simples'";
const comillas2 = '"Comillas dobles"';

console.log(comillas);
console.log(comillas2);




/* Metodos para strings */

//length es un metodo (aunque no sear realmente uno como tal) que retorna el numero de caracteres de un string
console.log(producto.length);

/* indexOf retorna el indice (posición del caracter) del primer caracter en positivo (0, 1, 2, 3...) del string 
que se establecio en los argumentos */
//En caso de que el retorno sea negativo (-1) significa que no encontro esa cadena dentro de la variable
console.log(producto2.indexOf('pulgadas')); // esto retorna 11

// includes funciona de una manera similar a indexOf pero retorna true o false
console.log(producto.includes('pulgadas'));