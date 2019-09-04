/** URLs CRUD para las notas */
const   express = require( 'express' ),
        router = express .Router();

// Requires
const Note = require( '../models/Note' );    // Model

// Creamos las rutas 
router .get( '/notes/add', ( request, response ) => {
    response .render( 'notes/new-note' );
}); 
router .post( '/notes/new-note', async ( request, response ) => {     // Recibe datos enviados por el formulario
    const { title, description } = request .body,               // Destructuring
            errors = [];

    // Validación de los campos
    if( !title ) errors .push({ text: 'Por favor escriba un título' });
    if( !description ) errors .push({ text: 'Por favor escriba una descripción' });

    if( errors .length > 0 ) {
        response .render( 'notes/new-note', {                   // Retorna el Formulario
            errors,                                             // Pasa los mensajes de error a la vista
            title,                                              // Pasa el título contenido a la vista
            description                                         // Pasa la descripción a la vista
        });                  
    }
    else {
        const newNote = new Note({ title, description });       // Creamos una estructura JSON usando el Schema Definido con Mongoose
        console .log( newNote );
        await newNote .save();                                  // Guarda en la BD MongoDB. Tomará unos segundos por lo que se define como una funcion asincrona o usar then() para hacer acciones al finalizar la tarea
        response .redirect( '/notes' );                         // Redireciona al path /notes (Lista de datos guardados)
    }
    
});

router .get( '/notes', ( request, response ) => {
    response .render( 'notes/notes' );
});        

module .exports = router;