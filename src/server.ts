import Fastify from "fastify";
import cors from "@fastify/cors";

import { routes } from "./Routes";


const app = Fastify({ logger: true })

const start = async () => {

    await app.register(routes)
    await app.register(cors)
    const port: number = parseInt(process.env.PORT || '3000', 10);

    try {
        await app.listen(port);
        console.log(`Servidor iniciado na porta ${port}`);
    } catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }

}

start()