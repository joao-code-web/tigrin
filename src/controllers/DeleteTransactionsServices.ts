import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTransactionsServices } from "../service/DeleteTransactionsServices";

class DeleteTransactionsControll {
    async handle(req: FastifyRequest, reply: FastifyReply) {

        const { id } = req.query as { id: string }

        const transactionsService = new DeleteTransactionsServices();

        const transactions = await transactionsService.execute({ id })

        reply.send(transactions)

    }
}

export { DeleteTransactionsControll }