import { ImplementationsUserRepository } from "@src/repositories/implementations/"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const implementationsUserRepository = new ImplementationsUserRepository()


const createUserUseCase = new CreateUserUseCase(
    implementationsUserRepository

)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
