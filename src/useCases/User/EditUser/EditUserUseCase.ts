import { User } from "@src/entities/User"
import { IUsersRepository } from "@src/repositories/IUsersRepository"
import { EditUserRequestDTO } from "./EditUserDTO"

export class EditUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }


    async execute(data: EditUserRequestDTO) {

        const userExists = await this.usersRepository.findById(data.id)

        if (!userExists) {
            throw new Error('User does not exists.')
        }

        const user = new User(data, data.id)
        return await this.usersRepository.edit(user)

    }
}