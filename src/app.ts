import express from 'express';
// import mongoose from 'mongoose'
import database from './database/sequelize';

// import cors from 'cors'
import { router } from './routers';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'



class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middlewares()
        this.database()
        this.express.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
        this.routes()

    }

    private middlewares(): void {
        this.express.use(express.json())
        // this.express.use(cors())
    }

    private database(): void {
        database;
        ///mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/pokemonDB`, { useNewUrlParser: true })

    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express