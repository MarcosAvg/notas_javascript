// Metodos de propiedad
/*Los metodos de propiedad son en si como metodos "personalizados o propios" que pueden ser creados mediante objetos
que tienen como propiedades dunciones <<const objeto = {propiedad: funcion() {codigo}}>>, esos pueden ser llamados
de la misma manera que los metodos <<nombreDelObjeto.propiedad();>>*/

//Estructura de una metodo de propiedad

const reproductor = {                                   // Nombre del metodo
    reproducir: function(id) {                          // Propiedad
        console.log(`Reproduciendo canción con ${id}`)  // Codigo
    },

    pausar: function() {
        console.log('Pausando...')
    },

    crearPlaylist: function(nombre) {
        console.log(`Creando playlist: ${nombre}`)
    },

    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo: ${nombre}`)
    }
}


reproductor.borrarCancion = function(id){               // Tambien pueden ser creados externamente
    console.log(`Eliminando la canción: ${id}`)
}


// La consola lo tomara e imprimira como un objeto con sus propiedades
console.log(reproductor);

// llamado del metodo
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');