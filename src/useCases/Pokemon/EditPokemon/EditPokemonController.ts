import { Request, Response } from "express"
import { EditPokemonUseCase } from "./EditPokemonUseCase"

export class EditPokemonController {

    constructor(
        private editPokemonUseCase: EditPokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params;
        const { name, type } = request.body;
        if (!id)
            return response.status(400).send({ message: "please, set params id" })
        try {
            const pokemonId = Number(id);
            const res = await this.editPokemonUseCase.execute({ name, pokemonId, type })
            response.status(200).send(res)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}