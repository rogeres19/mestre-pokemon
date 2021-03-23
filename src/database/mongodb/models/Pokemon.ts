import { model, Document, Schema } from "mongoose";
import { Pokemon } from "@src/entities/Pokemon";

const pokemonSchema = new Schema({
    id: { type: String, required: false, unique: true },
    pokemonId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
});

const PokemonModel = model<Pokemon & Document>("Pokemon", pokemonSchema);

export default PokemonModel;