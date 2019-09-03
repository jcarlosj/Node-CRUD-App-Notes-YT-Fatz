/** URLs CRUD para la autenticación de usuarios */
const   express = require( 'express' ),
        router = express .Router();

// Creamos las rutas 
router .get( '/users/sign-in', ( request, response ) => {
    response .render( 'users/sign-in' );
});
router .get( '/users/sign-up', ( request, response ) => {
    response .render( 'users/sign-up' )
});

module .exports = router;