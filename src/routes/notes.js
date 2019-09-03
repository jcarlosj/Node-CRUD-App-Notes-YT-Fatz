/** URLs CRUD para las notas */
const   express = require( 'express' ),
        router = express .Router();

// Creamos las rutas 
router .get( '/notes', ( request, response ) => {
    response .send( 'Notas desde la base de datos' );
});        

module .exports = router;