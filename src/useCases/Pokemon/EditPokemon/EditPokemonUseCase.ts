import { Pokemon } from "@src/entities/Pokemon";
import { IPokemonsRepository } from "@src/repositories/IPokemonRepository";
import { EditPokemonRequestDTO } from "./EditPokemonDTO";

export class EditPokemonUseCase {

    constructor(
        private pokemonsRepository: IPokemonsRepository,
    ) { }


    async execute(data: EditPokemonRequestDTO) {

        const pokemonExists = await this.pokemonsRepository.findByPokemonId(data.pokemonId)

        if (!pokemonExists) {
            throw new Error('Pokemon does not exists.')
        }

        const pokemon = new Pokemon(data, data.pokemonId)
        return await this.pokemonsRepository.edit(pokemon)

    }
}