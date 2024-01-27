import prismaClient from "../prisma";

class allTransactionsServices {
    async execute() {
        const customer = await prismaClient.transactions.findMany();

        return customer
    }
}

export { allTransactionsServices }