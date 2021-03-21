import { Pokemon } from "@src/entities/Pokemon";
import { IPokemonsRepository } from "@src/repositories/IPokemonRepository";
import { DetailsPokemonRequestDTO } from "./DetailsPokemonDTO";

export class DetailsPokemonUseCase {

    constructor(
        private pokemonsRepository: IPokemonsRepository,
    ) { }


    async execute(data: DetailsPokemonRequestDTO) {

        const pokemonExists = await this.pokemonsRepository.findById(data.id);

        if (!pokemonExists) {
            throw new Error('Pokemon does not exists.')
        }

        return await this.pokemonsRepository.findById(data.id);

    }
}