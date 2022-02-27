import pkg from 'mongoose';
const { Schema, model } = pkg;

const usuarioIDPSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
});

export default model('usuarioIDP', usuarioIDPSchema);