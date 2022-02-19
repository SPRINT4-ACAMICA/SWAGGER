import pkg from 'mongoose';
const { Schema, model } = pkg;

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

export default model("Producto", productoSchema);