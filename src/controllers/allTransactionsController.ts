import { FastifyRequest, FastifyReply } from "fastify";
import { allTransactionsServices } from "../service/allTransactionsServices";

class allTransactionsController {
    async handle(req: FastifyRequest, reply: FastifyReply) {
        const allTransactions = new allTransactionsServices();

        const transactions = await allTransactions.execute();

        reply.send(transactions)
    }
}

export { allTransactionsController }