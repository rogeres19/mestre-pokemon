import Sequelize, { Model } from 'sequelize'
import { database } from '../index'

class PokemonModel extends Model {
    public pokemonId!: number
    public name!: string
    public type!: string
}

PokemonModel.init(
    {
        pokemonId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        type: Sequelize.STRING,
    },
    {
        sequelize: database.connection,
        tableName: "pokemons",
        freezeTableName: true
    }
)


export default PokemonModel