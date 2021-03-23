import { Schema } from "mongoose";


const pokemonSchema = new Schema({
    id: { type: String, required: false, unique: true },
    pokemonId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
});

export default pokemonSchema;