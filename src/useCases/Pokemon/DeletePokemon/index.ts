import { ImplementationsPokemonsRepository } from "@src/repositories/implementations/";
import { DeletePokemonController } from "./DeletePokemonController";
import { DeletePokemonUseCase } from "./DeletePokemonUseCase";

const implementationsPokemonsRepository = new ImplementationsPokemonsRepository()

const deletePokemonUseCase = new DeletePokemonUseCase(
    implementationsPokemonsRepository
)

const deletePokemonController = new DeletePokemonController(
    deletePokemonUseCase
)

export { deletePokemonUseCase, deletePokemonController }
