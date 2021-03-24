import { User } from "@src/entities/User"
import { IUsersRepository } from "../IUsersRepository"
import UserModel from '../../database/sequelize/models/User'

export class PostgresUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        const user = await UserModel.findOne({ where: { email } })
        return user
    }

    async save(user: User): Promise<User> {
        return await UserModel.create(user)
    }

    async findById(id: string): Promise<User> {
        const user = await UserModel.findOne({ where: { id } })
        return user
    }

    async edit(user: User): Promise<User> {
        const { id } = user
        await UserModel.update(user, {
            where: { id },
            fields: ['nickname', 'email', 'password']
        })
        return user
    }



}