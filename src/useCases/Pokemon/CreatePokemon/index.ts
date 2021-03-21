import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";
import { CreatePokemonController } from "./CreatePokemonController";
import { CreatePokemonUseCase } from "./CreatePokemonUseCase";

const mongoPokemonsRepository = new MongoPokemonsRepository()


const createPokemonUseCase = new CreatePokemonUseCase(
    mongoPokemonsRepository
)

const createPokemonController = new CreatePokemonController(
    createPokemonUseCase
)

export { createPokemonUseCase, createPokemonController }
