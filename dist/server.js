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
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const Routes_1 = require("./Routes");
const app = (0, fastify_1.default)({ logger: true });
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield app.register(Routes_1.routes);
    yield app.register(cors_1.default);
    const port = parseInt(process.env.PORT || '3000', 10);
    try {
        yield app.listen(port);
        console.log(`Servidor iniciado na porta ${port}`);
    }
    catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
});
start();
