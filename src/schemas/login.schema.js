import pkg from 'mongoose';
const { Schema } = pkg;

export const sessionSchema = new Schema({
  nombre:  String,
  contraseña: String
});