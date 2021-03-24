import { model, Document, Schema } from "mongoose"
import { Pokemon } from "@src/entities/Pokemon"

const pokemonSchema = new Schema({
    pokemonId: { type: Number, unique: true, default: 0 },
    name: { type: String, required: true },
    type: { type: String, required: true },
})


const CounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
})

pokemonSchema.pre<Pokemon & Document>('save', async function (next): Promise<void> {
    try {
        const count = await Counter.findOneAndUpdate(
            { _id: 'pokemonId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true, useFindAndModify: false }
        )
        this.pokemonId = count.seq
        return next()
    } catch (err) {
        throw new Error('Error on create pokemon')
    }

})



const Counter = model<{ seq: number } & Document>('counter', CounterSchema)

const PokemonModel = model<Pokemon & Document>("Pokemon", pokemonSchema)



export default PokemonModel