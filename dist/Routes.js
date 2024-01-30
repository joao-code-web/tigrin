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
exports.routes = void 0;
const allTransactionsController_1 = require("./controllers/allTransactionsController");
const CreatedTransactionsController_1 = require("./controllers/CreatedTransactionsController");
const DeleteTransactionsServices_1 = require("./controllers/DeleteTransactionsServices");
const UptadeTransactionController_1 = require("./controllers/UptadeTransactionController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/DALE", (req, reply) => {
            reply.send("<h1>ajkslaks</h1>");
        });
        fastify.get("/", (req, reply) => {
            return new allTransactionsController_1.allTransactionsController().handle(req, reply);
        });
        fastify.post("/", (req, reply) => {
            return new CreatedTransactionsController_1.CreateCustomerController().handle(req, reply);
        });
        fastify.delete("/", (req, reply) => {
            return new DeleteTransactionsServices_1.DeleteTransactionsControll().handle(req, reply);
        });
        fastify.put("/", (req, reply) => {
            return new UptadeTransactionController_1.UpdateTransactionController().handle(req, reply);
        });
    });
}
exports.routes = routes;
