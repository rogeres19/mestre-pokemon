import { Request, Response } from "express"
import { ListPokemonUseCase } from "./ListPokemonUseCase"

export class ListPokemonController {

    constructor(
        private listPokemonUseCase: ListPokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {

        try {
            const res = await this.listPokemonUseCase.execute({})

            response.status(200).send(res)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}