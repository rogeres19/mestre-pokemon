import { IPokemonsRepository } from "@src/repositories/IPokemonRepository"
import { ListPokemonRequestDTO } from "./ListPokemonDTO"

export class ListPokemonUseCase {

    constructor(
        private pokemonRepository: IPokemonsRepository,
    ) { }


    async execute(data: ListPokemonRequestDTO) {
        const pokemons = await this.pokemonRepository.list()
        return pokemons;

    }
}