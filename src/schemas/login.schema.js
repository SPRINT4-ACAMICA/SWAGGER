const inicioSesionSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default inicioSesionSchema;