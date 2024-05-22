// Concatenacion de cadenas

let nombre = 'Marcos';
let email = 'correo@correo.com';

//Manera antigua de concatenar
let concatenacion ='Nombre cliente: ' + nombre + ' Email: ' + email;

//Template Strings - Strings Litarals
//Aqui se utilizan las comillas invertidas <<` `>> y una sentencia de ${variable} para dar formato a la concatenacion
console.log(`Nombre cliente: ${nombre} Email: ${email}`)



console.log(concatenacion);