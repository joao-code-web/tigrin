import prismaClient from "../prisma";

interface DeleteCustomerPros {
    id: string
}

class DeleteTransactionsServices {
    async execute({ id }: DeleteCustomerPros) {
        if (!id) {
            throw new Error("Solitação Invalida")
        }

        const findTransaction = await prismaClient.transactions.findFirst({
            where: {
                id: id
            }
        })


        if (!findTransaction) {
            throw new Error("cliente Invalida")
        }

        await prismaClient.transactions.delete({
            where: {
                id: findTransaction.id
            }
        })

        return { message: "Deletado com Sucesso" }

    }
}

export { DeleteTransactionsServices }