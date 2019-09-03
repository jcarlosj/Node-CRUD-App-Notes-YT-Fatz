/** Conexión a la Base de Datos */
const mongoose = require( 'mongoose' );

/** Si la BD no existe la crea en este caso 'db-app-notes' */
mongoose .connect( 'mongodb://localhost/db-app-notes', {
    useCreateIndex: true,       // Falso por defecto. Configurado para truehacer que la compilación de índice predeterminada de Mongoose se use en createIndex()
    useNewUrlParser: true,      // Bandera para permitir a los usuarios recurrir al antiguo analizador (Controlador DB MongoDB)
    useFindAndModify: false     // Configurado para falsehacer findOneAndUpdate()y findOneAndRemove()usar nativo en findOneAndUpdate()lugar de findAndModify()
}) .then( db => {
    console .log( 'Conectado a la Base de datos' );
}) .catch( err => {
    console .log( err );
});    