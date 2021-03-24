import { ImplementationsPokemonsRepository } from "@src/repositories/implementations/"
import { CreatePokemonController } from "./CreatePokemonController"
import { CreatePokemonUseCase } from "./CreatePokemonUseCase"

const implementationsPokemonRepository = new ImplementationsPokemonsRepository()


const createPokemonUseCase = new CreatePokemonUseCase(
    implementationsPokemonRepository
)

const createPokemonController = new CreatePokemonController(
    createPokemonUseCase
)

export { createPokemonUseCase, createPokemonController }
