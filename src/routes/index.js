/** URLs principales de la aplicación */
const router = require( 'express' ) .Router();      

// Creamos las rutas 
router .get( '/', ( request, response ) => {
    response .send( 'Página Principal (index)' );
});

module .exports = router;