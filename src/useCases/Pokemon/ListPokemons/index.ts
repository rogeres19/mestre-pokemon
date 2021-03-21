import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";
import { ListPokemonController } from "./ListPokemonController";
import { ListPokemonUseCase } from "./ListPokemonUseCase";

const mongoPokemonsRepository = new MongoPokemonsRepository()

const listPokemonUseCase = new ListPokemonUseCase(
    mongoPokemonsRepository
)

const listPokemonController = new ListPokemonController(
    listPokemonUseCase
)

export { listPokemonUseCase, listPokemonController }
