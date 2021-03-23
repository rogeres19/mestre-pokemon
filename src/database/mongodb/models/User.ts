import { Schema } from "mongoose";

const userSchema = new Schema({
    id: { type: String, required: false, unique: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export default userSchema;
