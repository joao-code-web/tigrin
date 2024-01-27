import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTransactionService } from "../service/UpdateTransactionService";

class UpdateTransactionController {
    private updateTransactionService: UpdateTransactionService;

    constructor() {
        this.updateTransactionService = new UpdateTransactionService();
    }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const { id, name, value } = req.query as { id: string, name: string, value: number };

        try {
            // Assuming your service method returns the updated transaction
            const updatedTransaction = await this.updateTransactionService.execute({ id, name, value });
            reply.send(updatedTransaction);
        } catch (error) {
            console.error("Error updating transaction:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export { UpdateTransactionController };
