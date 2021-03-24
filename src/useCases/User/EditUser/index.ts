import { ImplementationsUserRepository } from "@src/repositories/implementations/"
import { EditUserController } from "./EditUserController"
import { EditUserUseCase } from "./EditUserUseCase"


const implementationsUsersRepository = new ImplementationsUserRepository()


const editUserUseCase = new EditUserUseCase(
    implementationsUsersRepository
)

const editUserController = new EditUserController(
    editUserUseCase
)

export { editUserUseCase, editUserController }
