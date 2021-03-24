import { Pokemon } from "@src/entities/Pokemon"

export interface IPokemonsRepository {
    list(): Promise<Pokemon[]>
    findByPokemonId(pokemonId: Number): Promise<Pokemon>
    delete(pokemonId: Number): Promise<void>
    edit(pokemon: Pokemon): Promise<Pokemon>
    save(pokemon: Pokemon): Promise<Pokemon>
}