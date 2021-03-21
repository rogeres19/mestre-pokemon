import { Pokemon } from "@src/entities/Pokemon";
import { IPokemonsRepository } from "@src/repositories/IPokemonRepository";
import { CreatePokemonRequestDTO } from "./CreatePokemonDTO";

export class CreatePokemonUseCase {

    constructor(
        private pokemonRepository: IPokemonsRepository,
    ) { }


    async execute(data: CreatePokemonRequestDTO) {

        const pokemonAlreadyExists = await this.pokemonRepository.findByPokemonId(data.pokemonId);

        if (pokemonAlreadyExists) {
            throw new Error('Pokemon already exists.')
        }

        const pokemon = new Pokemon(data);
        return await this.pokemonRepository.save(pokemon);

    }
}