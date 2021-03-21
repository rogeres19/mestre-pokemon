import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";
import { DetailsPokemonController } from "./DetailsPokemonController";
import { DetailsPokemonUseCase } from "./DetailsPokemonUseCase";

const mongoPokemonsRepository = new MongoPokemonsRepository()

const detailsPokemonUseCase = new DetailsPokemonUseCase(
    mongoPokemonsRepository
)

const detailsPokemonController = new DetailsPokemonController(
    detailsPokemonUseCase
)

export { detailsPokemonUseCase, detailsPokemonController }
