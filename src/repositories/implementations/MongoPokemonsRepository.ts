import { Pokemon } from "@src/entities/Pokemon"
import { IPokemonsRepository } from "../IPokemonRepository"
import PokemonModel from "../../database/mongodb/models/Pokemon"


export class MongoPokemonsRepository implements IPokemonsRepository {
    async findByPokemonId(pokemonId: number): Promise<Pokemon> {
        const pokemon = await PokemonModel.findOne({ pokemonId }).select('-__v')
        return pokemon
    }

    async save(pokemon: Pokemon): Promise<Pokemon> {
        const { name, type } = pokemon
        const pokemonModel = new PokemonModel({ name, type })
        await pokemonModel.save()
        return pokemonModel
    }

    async edit(pokemon: Pokemon): Promise<Pokemon> {
        await PokemonModel.updateOne({ pokemonId: pokemon.pokemonId }, pokemon)
        return pokemon
    }

    async delete(pokemonId: number): Promise<void> {
        await PokemonModel.deleteOne({ pokemonId })
    }


    async list(): Promise<Pokemon[]> {
        const pokemons = await PokemonModel.find({}).select('-__v')
        return pokemons ? pokemons : []

    }


}
