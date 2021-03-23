
const config = {
    host: process.env.POSTGRES_DB_HOST,
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASS,
    database: process.env.POSTGRES_DB_NAME,
    selected_db: process.env.SELECTED_DB
};

export { config }