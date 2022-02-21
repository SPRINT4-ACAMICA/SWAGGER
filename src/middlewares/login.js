import inicioSesionSchema from "../schemas/login.schema.js";

const inicioSesionCorrecto = async (req, res, next) => {
    try {
        await inicioSesionSchema.validateAsync(req.body);
        next();
    } catch (error) {
        console.error(error.details[0].message);
        res.status(404).json(error.details[0].message)
    }
};

export default inicioSesionCorrecto;
