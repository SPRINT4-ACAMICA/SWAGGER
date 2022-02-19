import pkg from 'mongoose';
const { Schema, model } = pkg;

const PedidoSchema = new Schema({
    usuario: {
        type: String,
        required:true
    },
    direccion: {
        type: String,
        required:true
    },
    pedidos: [{
        nombres: {
            type: Array,
            required: true
        },
        cantidades: {
            type: Array,
            required: true
        },
        precio: {
            type: Number
        }
    }]
});

export default model('Pedido', PedidoSchema);