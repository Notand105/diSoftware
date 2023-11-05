"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fachadaJuego_1 = __importDefault(require("./fachadaJuego"));
//para leer desde terminal
const readline = __importStar(require("node:readline/promises"));
const node_process_1 = require("node:process");
let disparos = 0;
const Game = new fachadaJuego_1.default();
// Función principal asincrónica para el juego
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (Game.ganar()) {
            yield readInput(); // Esperar a que el usuario ingrese la cantidad de disparos
        }
    });
}
function readInput() {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
        const answer = yield rl.question('Cantidad de disparos ');
        let number = parseInt(answer, 10);
        disparos = number;
        console.log(`disparos: ${disparos}`);
        for (let i = 0; i < disparos; i++) {
            Game.destruir();
        }
        Game.crear();
        Game.cantidadMarcianos();
        rl.close();
    });
}
// Iniciar el juego
main().catch((error) => {
    console.error(`Error: ${error}`);
});
