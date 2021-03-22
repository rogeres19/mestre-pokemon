import { ImplementationsPokemonsRepository } from "@src/repositories/implementations/";
import { DetailsPokemonController } from "./DetailsPokemonController";
import { DetailsPokemonUseCase } from "./DetailsPokemonUseCase";

const implementationsPokemonsRepository = new ImplementationsPokemonsRepository()

const detailsPokemonUseCase = new DetailsPokemonUseCase(
    implementationsPokemonsRepository
)

const detailsPokemonController = new DetailsPokemonController(
    detailsPokemonUseCase
)

export { detailsPokemonUseCase, detailsPokemonController }
