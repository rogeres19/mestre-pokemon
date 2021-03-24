import { model, Document, Schema } from "mongoose"
import { User } from "@src/entities/User"

const userSchema = new Schema({
    id: { type: String, required: false, unique: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const UserModel = model<User & Document>("User", userSchema)

export default UserModel
