import mongoose from 'mongoose';
import { IDatabase } from "../IDatabase"

class Database implements IDatabase {

    constructor() {
        this.init();
    }

    init(): void {
        mongoose.connect(`mongodb://${process.env.MONGO_DB_HOST}:27017/${process.env.MONGO_DB_NAME}`, { useNewUrlParser: true });

    }
}

const database: Database = new Database();

export { database };

