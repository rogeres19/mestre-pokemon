import { Request, Response } from "express"
import { DeletePokemonUseCase } from "./DeletePokemonUseCase"

export class DeletePokemonController {

    constructor(
        private deletePokemonUseCase: DeletePokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params
        console.log(id)
        if (!!!id)
            return response.status(400).send({ message: "pokemon does not exist" })
        try {
            const pokemonId = Number(id)
            await this.deletePokemonUseCase.execute({ pokemonId })
            response.status(200).send({ message: 'pokemon has been successfully deleted' })
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}