// This
//This hace rferencia en este contexto al objeto sobre el cual se esta mandando llamar
/* Es importante mencionar que el this no funcionaria de la misma manera con juna arrow  function << => >>
puesto que esta misma hace referencia a la ventana <<window>> y por lo tanto no se encasillaria en el objeto
actual */

const reservacion = {
    nombre: 'Marcos',
    apellido: 'Valenzuela',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} debe un total de: ${this.total}`)
    }
};

const reservacion2 = {
    nombre: 'Adrián',
    apellido: 'Valenzuela',
    total: 5000,
    pagado: false,
    informacion: () => {
        console.log(`El cliente ${this.nombre} debe un total de: ${this.total}`)
    }
};

reservacion.informacion();
reservacion2.informacion();