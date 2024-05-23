//

/* La función puede tener "argumentos por defecto", para en caso de que al ser llamada no se tengan valores para
los parametros, estos puedan tener uno ya definido y asi que la funcion no marque un error */

function sumar(numero1 = 0, numero2 = 0) {  // numero1 y numero2 son parametros y tienen un valor por defecto
    console.log(numero1 + numero2);
}
sumar(10, 10);      // Argumentos o valores reales
sumar(3, 3);
sumar(5, 17);
sumar(6, 9);
sumar(10);          // En caso de no tener argumentos por defecto, esta llamada de funcion daria error


const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);