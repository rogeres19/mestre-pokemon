import { User } from "@src/entities/User"

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    save(user: User): Promise<User>
    edit(user: User): Promise<User>

}