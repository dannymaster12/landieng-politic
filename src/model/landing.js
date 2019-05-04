const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const landing = new Schema({
    nombre_apellido: String,
    email: String,
    telefono: Number,
    edad: Number
});

module.exports = mongoose.model('lading_lucio', landing);