import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";
import { EditPokemonController } from "./EditPokemonController";
import { EditPokemonUseCase } from "./EditPokemonUseCase";

const mongoPokemonsRepository = new MongoPokemonsRepository()

const editPokemonUseCase = new EditPokemonUseCase(
    mongoPokemonsRepository
)

const editPokemonController = new EditPokemonController(
    editPokemonUseCase
)

export { editPokemonUseCase, editPokemonController }
