"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Marcianos_1 = __importDefault(require("../marcianos/Marcianos"));
class Computadora {
    constructor() {
        this.marcianos = Marcianos_1.default.getMarcianos();
    }
    crearMarcianos() {
        this.marcianos.crearMarciano();
    }
    static getInstance() {
        if (!Computadora.instance) {
            Computadora.instance = new Computadora();
        }
        return Computadora.instance;
    }
}
exports.default = Computadora;
