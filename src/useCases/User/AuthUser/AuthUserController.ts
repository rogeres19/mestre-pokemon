import { Request, Response } from "express"
import { AuthUserUseCase } from "./AuthUserUseCase"

export class AuthUserController {

    constructor(
        private authUserUseCase: AuthUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { email, password } = request.body;
        if (!email || !password)
            return response.status(400).send("some fields empty")
        try {
            let res = await this.authUserUseCase.execute({
                email, password
            })

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}