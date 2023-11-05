"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Marcianos_1 = __importDefault(require("../marcianos/Marcianos"));
class Jugador {
    constructor() {
        this.marcianos = Marcianos_1.default.getMarcianos();
    }
    destruirMarciano() {
        this.marcianos.derribaMarcianos();
    }
    static getInstance() {
        if (!Jugador.instance) {
            Jugador.instance = new Jugador();
        }
        return Jugador.instance;
    }
}
exports.default = Jugador;
