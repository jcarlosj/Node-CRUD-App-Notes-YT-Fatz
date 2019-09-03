// Requires
const   express = require( 'express' ),

// Inicializations
        app = express();

// Settings
app .set( 'port', 3000 );

// Server
app .listen( app .get( 'port' ) );