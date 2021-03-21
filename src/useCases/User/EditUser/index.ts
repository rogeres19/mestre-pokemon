import { PostgresUsersRepository } from "@src/repositories/implementations/PostgresUsersRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUseCase";
import { MongoUsersRepository } from "@src/repositories/implementations/MongoUsersRepository";


// const postgresUsersRepository = new PostgresUsersRepository()
const mongoUsersRepository = new MongoUsersRepository()


const editUserUseCase = new EditUserUseCase(
    mongoUsersRepository
    // postgresUsersRepository
)

const editUserController = new EditUserController(
    editUserUseCase
)

export { editUserUseCase, editUserController }
