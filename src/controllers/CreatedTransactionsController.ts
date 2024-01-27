import { FastifyRequest, FastifyReply } from "fastify";
import { CreatedTransactionsServices } from "../service/CreatedTransactionsServices";

class CreateCustomerController {
    async handle(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { name, value } = req.body as { name: string, value: number };
            const transactionService = new CreatedTransactionsServices();
            const transaction = await transactionService.execute({ name, value });
            reply.send(transaction);
        } catch (error) {
            console.error("Error creating transaction:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export { CreateCustomerController };
