import prismaClient from "../prisma";

interface UpdateTransactionProps {
    id: string;
    name: string;
    value: number;
}

class UpdateTransactionService {
    async execute({ id, name, value }: UpdateTransactionProps) {
        if (!id || !name || !value) {
            throw new Error("Preencha todos os campos");
        }

        const updatedTransaction = await prismaClient.transactions.update({
            where: {
                id: id
            },
            data: {
                name: name,
                value: value
            }
        });

        return updatedTransaction;
    }
}

export { UpdateTransactionService };
