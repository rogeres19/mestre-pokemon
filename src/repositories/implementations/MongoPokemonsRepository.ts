import { Pokemon } from "@src/entities/Pokemon";
import { IPokemonsRepository } from "../IPokemonRepository";
import { model, Schema, Document } from "mongoose";

const pokemonSchema = new Schema({
    id: { type: String, required: false, unique: true },
    pokemonId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
});

const PokemonModel = model<Pokemon & Document>("Pokemon", pokemonSchema);

export class MongoPokemonsRepository implements IPokemonsRepository {
    async findByPokemonId(pokemonId: Number): Promise<Pokemon> {
        const pokemon = await PokemonModel.findOne({ pokemonId });
        return pokemon;
    }

    async findById(id: string): Promise<Pokemon> {
        const pokemon = await PokemonModel.findOne({ id });
        return pokemon;
    }

    async save(pokemon: Pokemon): Promise<Pokemon> {
        const pokemonModel = new PokemonModel(pokemon);
        await pokemonModel.save();
        return pokemon;
    }

    async edit(pokemon: Pokemon): Promise<Pokemon> {
        await PokemonModel.updateOne({ id: pokemon.id }, pokemon);
        return pokemon;
    }

    async delete(id: string): Promise<void> {
        await PokemonModel.deleteOne({ id });
    }


    async list(): Promise<Pokemon[]> {
        const pokemons = await PokemonModel.find({});
        return pokemons ? pokemons : [];

    }


}
