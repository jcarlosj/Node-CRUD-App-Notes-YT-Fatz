// Requires
const   express = require( 'express' ),
        path = require( 'path' ),
        exphbs = require( 'express-handlebars' ),
        methodOverride = require( 'method-override' ),
        session = require( 'express-session' ),
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

// Middlewares
app .use( express .urlencoded({ extended: false }) );           // La sintaxis "extendida" permite que los objetos ricos y las matrices se codifiquen en el formato codificado con URL, lo que permite una experiencia similar a JSON con codificación URL (Extended: false) indica que solo se desean los datos.
app .use( methodOverride( '_method' ) );                        // Para que los formularios puedan usar otros tipos de metodos
app .use( session({                                             // Para configurar la variable de sessión, para hacer autenticaciones en Express
    secret: 'mysecretapp',                                      // Cadena secreta utilizada para firmar la cookie de ID de sesión. 
    resave: true,                                               // Obliga a que la sesión se guarde nuevamente
    saveUninitialized: true                                     // Obliga a guardar una sesión que no está inicializada
}) );

// Routes
app .use( require( './routes/index' ) );
app .use( require( './routes/users' ) );
app .use( require( './routes/notes' ) );

// Static Files
app .use( express .static( path .join( __dirname, 'public' ) ) );   // Define directorio de archivos estáticos para Express

// Server
app .listen( app .get( 'port' ), () => {
    console .log( `Servidor en el puerto: ${ app .get( 'port' ) }` );
});