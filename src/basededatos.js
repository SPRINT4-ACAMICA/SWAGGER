import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const stringConexion = process.env.DATABASE_URL;

(async () => {
    const db = await mongoose.connect(stringConexion, {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Conectado a la base de datos', db.connection.name);
}
)();
