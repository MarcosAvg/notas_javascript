// Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen: 'imagen'
}


// Extraer valores dentro de un objeto a un variable (forma anterior)
const precioProducto = producto.precio;


//Destructuring
/* Esto deconstruye el objeto utilizando los mismos nombres de las propiedades dentro del objeto, y creando una 
variable unica en el codigo fuera del objeto << const {propiedad del objeto} = nombre del objeto; >> donde lo que
esta entre << { } >> (o sea el nombre de la propiedad) sera el nombre que definira ala nueva variable junto al valor
que tiene definido*/

const {precio} = producto;               // esta variable tendra el valor de producto.precio
const {nombreProducto} = producto;       // esta variable tendra el valor de producto.nombreProducto
const {disponible, imagen} = producto;  // se puede crear mas de una variable separandola por una coma


//Impresiones en consola
console.log(precio);
console.log(nombreProducto);
console.log(disponible);
console.log(imagen);