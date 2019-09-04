/** Mongoose para Modelar la Base de Datos usando Schemas */
const   mongoose = require( 'mongoose' ),
        { Schema } = mongoose;

// Define Shema (Estructura de datos) 
const NoteShema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date .now }
});

module .exports = mongoose .model( 'Note', NoteShema );