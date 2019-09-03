/** URLs CRUD para las notas */
const   express = require( 'express' ),
        router = express .Router();

// Creamos las rutas 
router .get( '/notes', ( request, response ) => {
    response .render( 'notes/notes' );
});        

module .exports = router;