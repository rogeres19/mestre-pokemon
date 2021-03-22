import Sequelize from 'sequelize';

import { config } from '../../config/database';

class Database {
    public connection: Sequelize.Sequelize;

    constructor() {
        this.init();
        this.connection.sync();
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(
            config.database,
            config.username,
            config.password,
            { host: config.host, dialect: "postgres" });

    }
}

const database: Database = new Database();

export default database;