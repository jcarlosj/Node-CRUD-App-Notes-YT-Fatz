/** URLs principales de la aplicación */
const router = require( 'express' ) .Router();      

// Creamos las rutas 
router .get( '/', ( request, response ) => {
    response .send( 'Página Principal (index)' );
});
router .get( '/about', ( request, response ) => {
    response .send( 'Acerca de (about)' );
});

module .exports = router;