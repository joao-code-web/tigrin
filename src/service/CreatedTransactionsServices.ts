import prismaClient from "../prisma";

interface CreatedTransactionsServicesProps {
    name: string;
    value: number;
}

class CreatedTransactionsServices {
    async execute({ name, value }: CreatedTransactionsServicesProps): Promise<any> {
        if (!name || value === undefined) {
            throw new Error("Please fill in all fields and provide a valid value");
        }

        try {
            const transactions = await prismaClient.transactions.create({
                data: {
                    name,
                    value
                }
            });

            return transactions;
        } catch (error) {
            // Handle specific Prisma errors if needed
            throw new Error("Error creating transaction");
        }
    }
}

export { CreatedTransactionsServices };
