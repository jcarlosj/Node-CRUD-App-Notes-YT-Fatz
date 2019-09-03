/** URLs principales de la aplicación */
const router = require( 'express' ) .Router();      

// Creamos las rutas 
router .get( '/', ( request, response ) => {
    response .render( 'index' );
});
router .get( '/about', ( request, response ) => {
    response .render( 'about' );
});

module .exports = router;