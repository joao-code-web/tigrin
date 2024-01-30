"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const CreatedTransactionsServices_1 = require("../service/CreatedTransactionsServices");
class CreateCustomerController {
    handle(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, value } = req.body;
                const transactionService = new CreatedTransactionsServices_1.CreatedTransactionsServices();
                const transaction = yield transactionService.execute({ name, value });
                reply.send(transaction);
            }
            catch (error) {
                console.error("Error creating transaction:", error);
                reply.status(500).send({ error: "Internal Server Error" });
            }
        });
    }
}
exports.CreateCustomerController = CreateCustomerController;
