
import { database as postgres } from './sequelize';
import { database as mongodb } from './mongodb';
import { config } from '../config/database';

const database = config.selected_db == "postgres" ? postgres : mongodb;
export default database;
