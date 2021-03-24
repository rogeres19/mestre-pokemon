import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { IUsersRepository } from "@src/repositories/IUsersRepository"
import { AuthUserRequestDTO } from "./AuthUserDTO"
import authConfig from '../../../config/auth'


export class AuthUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }


    async execute(data: AuthUserRequestDTO) {

        const user = await this.usersRepository.findByEmail(data.email)

        if (!user) {
            throw new Error('Incorrect email/password combination!')
        }

        const passwordMatched = await compare(data.password, user.password)

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination!')
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        })

        return { token }

    }
}