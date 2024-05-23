function suma(n1, n2) {
    return n1 + n2;
}

const resultado = suma(10, 20);

console.log(resultado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto (total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);


const totalAPagar = calcularImpuesto(total);

console.log(`Su total a pagar es: $${totalAPagar}`);


