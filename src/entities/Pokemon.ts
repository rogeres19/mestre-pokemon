import { uuid } from "uuidv4";

export class Pokemon {
    public readonly id: string;
    public pokemonId: Number;
    public name: String;
    public type: String;


    constructor(props: Omit<Pokemon, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();

    }
}