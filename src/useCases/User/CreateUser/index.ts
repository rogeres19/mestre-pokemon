//import { PostgresUsersRepository } from "@src/repositories/implementations/PostgresUsersRepository";
import { MongoUsersRepository } from "@src/repositories/implementations/MongoUsersRepository";

import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

//const postgresUsersRepository = new PostgresUsersRepository()
const mongoUsersRepository = new MongoUsersRepository()




const createUserUseCase = new CreateUserUseCase(
    //postgresUsersRepository
    mongoUsersRepository

)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
