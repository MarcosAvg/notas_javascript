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
 const sumar2 = (n1, n2) => console.log(n1 + n2);


sumar2(2, 3);