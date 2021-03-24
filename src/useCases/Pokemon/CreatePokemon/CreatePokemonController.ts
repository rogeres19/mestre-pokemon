import { Request, Response } from "express"
import { CreatePokemonUseCase } from "./CreatePokemonUseCase"

export class CreatePokemonController {

    constructor(
        private createPokemonUseCase: CreatePokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { name, type } = request.body
        if (!name || !type)
            return response.status(400).send({ message: "some fields empty" })

        try {
            const res = await this.createPokemonUseCase.execute({
                name, type
            })

            response.status(200).send(res)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}