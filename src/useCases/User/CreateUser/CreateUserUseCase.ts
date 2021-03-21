import { User } from "@src/entities/User";
import { hash } from 'bcryptjs';
import { IUsersRepository } from "@src/repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }


    async execute(data: CreateUserRequestDTO) {

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists.')
        }

        ///encript password
        const hashedPassword = await hash(data.password, 12);
        data.password = hashedPassword;

        const user = new User(data);
        await this.usersRepository.save(user);
        delete user.password;
        return user;

    }
}