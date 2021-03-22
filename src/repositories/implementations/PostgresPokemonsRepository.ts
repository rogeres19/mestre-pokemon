import { Pokemon } from "@src/entities/Pokemon";
import { IPokemonsRepository } from "../IPokemonRepository";
import PokemonModel from '../../database/sequelize/models/Pokemon';

export class PostgresPokemonsRepository implements IPokemonsRepository {
    async findByPokemonId(pokemonId: number): Promise<Pokemon> {
        const pokemon = await PokemonModel.findOne({ where: { pokemonId } });
        return pokemon;
    }

    async findById(id: string): Promise<Pokemon> {
        const pokemon = await PokemonModel.findOne({ where: { id } });
        return pokemon;
    }

    async save(pokemon: Pokemon): Promise<Pokemon> {
        return await PokemonModel.create(pokemon);
    }

    async edit(pokemon: Pokemon): Promise<Pokemon> {
        const { id } = pokemon;
        const result = await PokemonModel.update(pokemon, {
            where: { id },
            fields: ['pokemonId', 'name', 'type']
        });
        return pokemon;
    }

    async delete(id: string): Promise<void> {
        await PokemonModel.destroy({ where: { id } });
    }


    async list(): Promise<Pokemon[]> {
        const pokemons = await PokemonModel.findAll({});
        return pokemons ? pokemons : [];

    }


}
