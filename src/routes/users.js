/** URLs CRUD para la autenticación de usuarios */
const   express = require( 'express' ),
        router = express .Router();

// Creamos las rutas 
router .get( '/users/sign-in', ( request, response ) => {
    response .send( 'Ingreso a la aplicación' );
});
router .get( '/users/sign-up', ( request, response ) => {
    response .send( 'Autenticación de usuario' );
});

module .exports = router;