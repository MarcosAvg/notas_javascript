// Arrow functions

// Declaración de la función

// Esta de aqui seria una declaración comun de una función
const sumar = function(n1, n2) {
    console.log(n1 + n2);
}

sumar(5, 10);

//Estructura de una Arrow functión
/* En una arrow function la sintaxis es ligeramente parecida a una función normal (puesto que son lo mismo, solo tienen
sintaxis diferentes), en esta se estructura dando primero los parametros seguido de una arrow y por ultimo la sentencia
en si <<(parametro1, parametro2) => sentencia>> */

const sumar2 = (n1, n2) => console.log(n1 + n2);    //Si la funcion solo tiene una linea los <<{ }>> son opcionales


sumar2(2, 3);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

//const aprendiendo = tecnologia => console.log(tecnologia);  // igual a la de arriba pero formateada

aprendiendo('Javascript');


// Las Arrow functions son especialmente buenos para usar con array methods
// Se utilizan los methods de 15.js para ejemplificar
/* En las arrow functios se puede obviar el "return" de los methods asi como los () si solo se tiene un parametro
y los {} si solo se usa una linea */

//forEach
meses.forEach(mes => {
    console.log(mes);
    if(mes === 'Marzo'){
        console.log('Marzo si existe');
    }
})

//Some
resultado = carrito.some(producto => producto.nombre === 'Celular');

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);