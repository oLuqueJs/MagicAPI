import { Schema } from 'mongoose';

export const CommanderSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: String
})