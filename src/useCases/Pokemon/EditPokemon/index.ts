import { ImplementationsPokemonsRepository } from "@src/repositories/implementations/";
import { EditPokemonController } from "./EditPokemonController";
import { EditPokemonUseCase } from "./EditPokemonUseCase";

const implementationsPokemonsRepository = new ImplementationsPokemonsRepository()

const editPokemonUseCase = new EditPokemonUseCase(
    implementationsPokemonsRepository
)

const editPokemonController = new EditPokemonController(
    editPokemonUseCase
)

export { editPokemonUseCase, editPokemonController }
