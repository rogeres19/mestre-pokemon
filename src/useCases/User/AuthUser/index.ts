import { ImplementationsUserRepository } from "@src/repositories/implementations/";

import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

const implementationsUsersRepository = new ImplementationsUserRepository()



const authUserUseCase = new AuthUserUseCase(
    implementationsUsersRepository

)

const authUserController = new AuthUserController(
    authUserUseCase
)

export { authUserUseCase, authUserController }
