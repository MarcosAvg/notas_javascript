//Math
//Math es un objeto dentro de window que almacena funciones matematicas

let resultado;

resultado = Math.PI;                    // Muestra el valor de PI
resultado = Math.round(2.2);            // Redondea el valor dentro de los argumentos
resultado = Math.ceil(2.2);             // Redonde hacia arriba
resultado = Math.floor(2.2);            // Redondea hacia abajo
resultado = Math.sqrt(144);             // Raiz cuadrada
resultado = Math.abs(-5);               // Valor absoluto
resultado = Math.min(11, 2, 10, 4)      // Toma el valor minimo de un listado
resultado = Math.max(11, 2, 10, 4)      // Toma el valor maximo de un listado
resultado = Math.random();              // Genera un numero aleatorio por debajop de 1

// Ejemplo para generar un numero entero aleatorio
resultado = Math.floor(Math.random() * 10);



console.log(resultado);