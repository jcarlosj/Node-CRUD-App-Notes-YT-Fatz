/** URLs CRUD para las notas */
const   express = require( 'express' ),
        router = express .Router();

// Creamos las rutas 
router .get( '/notes/add', ( request, response ) => {
    response .render( 'notes/new-note' );
}); 
router .post( '/notes/new-note', ( request, response ) => {     // Recibe datos enviados por el formulario
    console .log( request .body );
    response .send( 'Los datos han sido enviados exitosamente por el método POST' );
});

router .get( '/notes', ( request, response ) => {
    response .render( 'notes/notes' );
});        

module .exports = router;