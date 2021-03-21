import { Request, Response } from "express"
import { CreatePokemonUseCase } from "./CreatePokemonUseCase"

export class CreatePokemonController {

    constructor(
        private createPokemonUseCase: CreatePokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { pokemonId, name, type } = request.body;
        if (!pokemonId || !name || !type)
            return response.status(400).send("some fields empty")

        try {
            const res = await this.createPokemonUseCase.execute({
                pokemonId, name, type
            })

            response.status(200).send(res)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}