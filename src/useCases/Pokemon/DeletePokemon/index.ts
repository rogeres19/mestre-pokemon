import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";
import { DeletePokemonController } from "./DeletePokemonController";
import { DeletePokemonUseCase } from "./DeletePokemonUseCase";

const mongoPokemonsRepository = new MongoPokemonsRepository()

const deletePokemonUseCase = new DeletePokemonUseCase(
    mongoPokemonsRepository
)

const deletePokemonController = new DeletePokemonController(
    deletePokemonUseCase
)

export { deletePokemonUseCase, deletePokemonController }
