import { Request, Response } from "express"
import { EditUserUseCase } from "./EditUserUseCase"

export class EditUserController {

    constructor(
        private editUserUseCase: EditUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params
        const { email, nickname, password } = request.body
        if (!id)
            return response.status(400).send({ message: "please, set params id" })
        try {
            const user = await this.editUserUseCase.execute({
                id, email, nickname, password
            })

            response.status(200).send(user)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}