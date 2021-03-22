import Sequelize, { Model } from 'sequelize';
import database from '../index';

class PokemonModel extends Model {
    public id!: string;
    public pokemonId!: number;
    public name!: string;
    public type!: string;
}

PokemonModel.init(
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUID,
            primaryKey: true
        },
        pokemonId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        type: Sequelize.STRING,
    },
    {
        sequelize: database.connection,
        tableName: "pokemons",
        freezeTableName: true
    }
);


export default PokemonModel;