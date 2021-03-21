import { Request, Response } from "express"
import { DeletePokemonUseCase } from "./DeletePokemonUseCase"

export class DeletePokemonController {

    constructor(
        private deletePokemonUseCase: DeletePokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params;
        if (!id)
            return response.status(400).send("pokemon does not exist")
        try {
            await this.deletePokemonUseCase.execute({ id })
            response.status(200).send('pokemon deleted')
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}