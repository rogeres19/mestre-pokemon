import { Pokemon } from "@src/entities/Pokemon";

export interface IPokemonsRepository {
    list(): Promise<Pokemon[]>;
    findById(id: string): Promise<Pokemon>;
    findByPokemonId(pokemonId: Number): Promise<Pokemon>;
    delete(id: string): Promise<void>;
    edit(pokemon: Pokemon): Promise<Pokemon>;
    save(pokemon: Pokemon): Promise<Pokemon>;
}