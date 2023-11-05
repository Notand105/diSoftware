"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Marcianos_1 = require("./Marcianos");
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.marcianos = Marcianos_1.default.getMarcianos();
    }
    Jugador.prototype.destruirMarciano = function () {
        this.marcianos.derribaMarcianos();
    };
    return Jugador;
}());
exports.default = Jugador;
