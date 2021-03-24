import { IPokemonsRepository } from "@src/repositories/IPokemonRepository"
import { DeletePokemonRequestDTO } from "./DeletePokemonDTO"

export class DeletePokemonUseCase {

    constructor(
        private pokemonsRepository: IPokemonsRepository,
    ) { }


    async execute(data: DeletePokemonRequestDTO) {

        const pokemonExists = await this.pokemonsRepository.findByPokemonId(data.pokemonId)

        if (!pokemonExists) {
            throw new Error('Pokemon does not exists.')
        }

        await this.pokemonsRepository.delete(data.pokemonId)

    }
}