// Requires
const   express = require( 'express' ),
        path = require( 'path' ),
        exphbs = require( 'express-handlebars' ),
// Inicializations
        app = express();

// Settings
app .set( 'port', process .env .PORT || 3000 );                 // Considera Puerto para servicios en la nube (Si existe que lo use, si no que use por defecto el 3000)
app .set( 'views', path .join( __dirname, 'views' ) );          // Define la ruta de las vistas (Por defecto node busca el directorio 'views' en el / del proyecto)
app .engine( '.hbs', exphbs({                                   // Define la configuración del Motor de Plantillas HandleBars para Express usando un Objeto JSON
    defaultLayout: 'main.hbs',                                  // Plantilla Principal de nuestra aplicación
    layoutsDir: path .join( app .get( 'views' ), 'layouts' ),   // Define la ruta de los layouts a partir de la de views
    partialsDir: path .join( app .get( 'views' ), 'partials' ), // Fragmentos de Plantilla que podemos usar en cualquier Vista
    extname: '.hbs'                                             // Extensión va a soportar nuestro motor de plantillas
}));
app .set( 'view engine', '.hbs' );                              // Configura el motor de plantillas (HandleBars)

// Server
app .listen( app .get( 'port' ), () => {
    console .log( `Servidor en el puerto: ${ app .get( 'port' ) }` );
});