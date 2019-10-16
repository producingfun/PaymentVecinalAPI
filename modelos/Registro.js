const mongoose = require('mongoose')
const Schema = mongoose.Schema

var RegistroSchema = new Schema({

    Nombre: {
        type:String,
        required:true
    },

    Direccion: {
        type:String,
        required:true
    },

    Telefono: {
        type:Number,
        required:true
    },

    Email: {
        type:String,
        required:true
    },

    Tarifa: {
        type:[string],
        required:true
    }
})