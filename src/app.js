// Requires
const   express = require( 'express' ),

// Inicializations
        app = express();

// Settings
app .set( 'port', process .env .PORT || 3000 );   // Considera Puerto para servicios en la nube (Si existe que lo use, si no que use por defecto el 3000)

// Server
app .listen( app .get( 'port' ), () => {
    console .log( `Servidor en el puerto: ${ app .get( 'port' ) }` );
});