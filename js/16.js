// Funciones
/* Javascript se ejecuta "en dos vueltas", donde la primera registra todas las funciones declaradas, y en la segunda
las ejectuta */


// Declaración de función
/*En esta declaración, la funcion se define como tal, y permite que se registre en el hoisting por lo tal, el llamado
puede ir en una linea de codigo anterior a la devlaración, ya que como se dijo antes, la funcion ya esta registrada */
sumar();
function sumar() {
    console.log(10+10);
}


// Expresión de la funcion
/* En este tipo de expresión la declaración de la función, se puede tomar por JS como una variable (const sumar2;) y
por lo tanto solo registra de manera simple la variable, ignorando la sintaxis de la funcion restante */
const sumar2 = function() {
    console.log(3+3);
}

sumar2();


//IIFE
/* Los IFFE son utilies para proteger las variables que se encuentren dentro de la funcion, para que estas no se puedan
acceder desde otro archivo JS */
(function() {
    console.log('Esto es una función');
})();