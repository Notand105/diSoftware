"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Computadora_1 = __importDefault(require("./Computadora"));
const Jugador_1 = __importDefault(require("../jugador/Jugador"));
const Marcianos_1 = __importDefault(require("../marcianos/Marcianos"));
class FachadaJuego {
    constructor() {
        this.marcianos = Marcianos_1.default.getMarcianos();
        this.computadora = Computadora_1.default.getInstance();
        this.jugador = Jugador_1.default.getInstance();
    }
    destruir() {
        this.jugador.destruirMarciano();
    }
    crear() {
        this.computadora.crearMarcianos();
    }
    ganar() {
        let left = this.marcianos.cuantosQuedan(false);
        return left > 0;
    }
    cantidadMarcianos() {
        this.marcianos.cuantosQuedan(true);
    }
}
exports.default = FachadaJuego;
