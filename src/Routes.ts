import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { allTransactionsController } from "./controllers/allTransactionsController";
import { CreateCustomerController } from "./controllers/CreatedTransactionsController";
import { DeleteTransactionsControll } from "./controllers/DeleteTransactionsServices";
import { UpdateTransactionController } from "./controllers/UptadeTransactionController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/DALE", (req: FastifyRequest, reply: FastifyReply) => {
        reply.send("<h1>ajkslaks</h1>");
    })
    fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {
        return new allTransactionsController().handle(req, reply)
    })

    fastify.post("/", (req: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(req, reply)
    })

    fastify.delete("/", (req: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTransactionsControll().handle(req, reply)
    })

    fastify.put("/", (req: FastifyRequest, reply: FastifyReply) => {
        return new UpdateTransactionController().handle(req, reply)
    })


}