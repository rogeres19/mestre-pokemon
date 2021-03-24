import Sequelize from 'sequelize'
import { IDatabase } from "../IDatabase"
import { config } from '../../config/database'

class Database implements IDatabase {
    public connection: Sequelize.Sequelize

    constructor() {
        this.init()
        this.connection.sync()
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(
            config.postgres.database,
            config.postgres.username,
            config.postgres.password,
            { host: config.postgres.host, dialect: "postgres" })

    }
}

const database: Database = new Database()

export { database }