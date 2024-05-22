// Variables
/* Javascript es un lenguaje de tipo dinamico, por lo cual guarda el tipo de dato (int, float, string, char) en el 
valor que tiene y no en la variable */

var producto = 'Audifonos gamer';   // Iniciar varible y asignarle un valor
var disponible;                     // Variable sin valor inicial
producto = true;                    // Reasignando el valor de la variable


/* Es posible iniciar varias variables a la vez sin la sintaxis de 'let' o 'var' en cada ocasión, solo separandolas 
por una coma */

var producto1 = 'Computadora',
   disponible1 = true,
   categoria = 'Computadoras';


/* Las variables no pueden iniciar por numeros (0, 1, 2...) por guion " - "*/

//var 1disponible = 1;
//var -categoria = "string";    // Se puede observar como el mismo ide o la consola muestran error


//Estilos para las variables
var nombre_producto = 'Monitor HD'; // Underscore
var nombreProducto = 'Monitor HD';  // Camel case
var NombreProducto = 'Monitor HD';  // Pascal case (este se usa comunmente para clases en JS)
var nombreproducto = 'Monitor HD';  // lower case

/* Las variables se consideran "case sensitive", es decir la variable es sensible a si es escrita con caracteres en 
mayusculas o minusculas */

console.log(producto);  // Esto mostrara en consola "true"
console.log(PRODUCTO);  // Esto no mostrara nada en consola ya que no es una variable definida