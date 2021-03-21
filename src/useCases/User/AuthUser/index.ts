//import { PostgresUsersRepository } from "@src/repositories/implementations/PostgresUsersRepository";
import { MongoUsersRepository } from "@src/repositories/implementations/MongoUsersRepository";

import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

//const postgresUsersRepository = new PostgresUsersRepository()
const mongoUsersRepository = new MongoUsersRepository()




const authUserUseCase = new AuthUserUseCase(
    mongoUsersRepository

)

const authUserController = new AuthUserController(
    authUserUseCase
)

export { authUserUseCase, authUserController }
