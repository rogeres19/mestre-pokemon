import mongoose from 'mongoose'
import { IDatabase } from "../IDatabase"
import { config } from '../../config/database'


class Database implements IDatabase {

    constructor() {
        this.init()
    }

    init(): void {
        mongoose.connect(`mongodb://${config.mongodb.host}:27017/${config.mongodb.database}`, { useNewUrlParser: true })

    }
}

const database: Database = new Database()

export { database }
