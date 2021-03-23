import { User } from "@src/entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { model, Document } from "mongoose";
import userSchema from "../../database/mongodb/models/User";

const UserModel = model<User & Document>("User", userSchema);

export class MongoUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await UserModel.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await UserModel.findOne({ id });
        return user;
    }


    async save(user: User): Promise<User> {
        const userModel = new UserModel(user);
        await userModel.save();
        return user;
    }

    async edit(user: User): Promise<User> {
        await UserModel.updateOne({ id: user.id }, user);
        return user;
    }


}
