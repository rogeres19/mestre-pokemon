import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { email, nickname, password } = request.body;
        if (!email || !nickname || !password)
            return response.status(400).send("some fields empty")
        try {
            let res = await this.createUserUseCase.execute({
                email, nickname, password
            })

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}