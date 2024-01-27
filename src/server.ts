import Fastify from "fastify";
import cors from "@fastify/cors";

import { routes } from "./Routes";


const app = Fastify({ logger: true })

const start = async () => {

    await app.register(routes)
    await app.register(cors)

    try {
        await app.listen({ port: process.env.PORT || 3000 })
        console.log("almslakso")
    } catch (error) {
        process.exit(1);
    }
}

start()