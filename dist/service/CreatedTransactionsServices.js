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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedTransactionsServices = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreatedTransactionsServices {
    execute({ name, value }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || value === undefined) {
                throw new Error("Please fill in all fields and provide a valid value");
            }
            try {
                const transactions = yield prisma_1.default.transactions.create({
                    data: {
                        name,
                        value
                    }
                });
                return transactions;
            }
            catch (error) {
                // Handle specific Prisma errors if needed
                throw new Error("Error creating transaction");
            }
        });
    }
}
exports.CreatedTransactionsServices = CreatedTransactionsServices;
