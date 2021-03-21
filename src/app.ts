import express from 'express';
import mongoose from 'mongoose'
// import cors from 'cors'
import { router } from './routers';


class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        // this.express.use(cors())
    }

    private database(): void {
        mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/pokemonDB`, { useNewUrlParser: true })
    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express