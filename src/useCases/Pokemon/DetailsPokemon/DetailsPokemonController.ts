import { Request, Response } from "express"
import { DetailsPokemonUseCase } from "./DetailsPokemonUseCase"

export class DetailsPokemonController {

    constructor(
        private detailsPokemonUseCase: DetailsPokemonUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params;
        if (!id)
            return response.status(400).send("pokemon does not exist")
        try {
            const res = await this.detailsPokemonUseCase.execute({ id })
            response.status(200).send(res)
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}