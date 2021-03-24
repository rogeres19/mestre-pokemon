export class Pokemon {
    public pokemonId: number
    public name: String
    public type: String


    constructor(props: Omit<Pokemon, 'pokemonId'>, pokemonId?: Number) {
        Object.assign(this, props)
    }
}