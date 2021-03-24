import { ImplementationsPokemonsRepository } from "@src/repositories/implementations/"
import { ListPokemonController } from "./ListPokemonController"
import { ListPokemonUseCase } from "./ListPokemonUseCase"

const implementationsPokemonsRepository = new ImplementationsPokemonsRepository()

const listPokemonUseCase = new ListPokemonUseCase(
    implementationsPokemonsRepository
)

const listPokemonController = new ListPokemonController(
    listPokemonUseCase
)

export { listPokemonUseCase, listPokemonController }
