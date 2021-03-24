import Sequelize, { Model } from 'sequelize'
import { database } from '../index'

class UserModel extends Model {
    public id!: string
    public nickname!: string
    public email!: string
    public password!: string
}

UserModel.init(
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUID,
            primaryKey: true
        },
        nickname: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,

    },
    {
        sequelize: database.connection,
        tableName: "users",
        freezeTableName: true
    }
)


export default UserModel