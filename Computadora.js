"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Marcianos_1 = require("./Marcianos");
var Computadora = /** @class */ (function () {
    function Computadora() {
        this.marcianos = Marcianos_1.default.getMarcianos();
    }
    Computadora.prototype.crearMarcianos = function () {
        this.marcianos.crearMarciano();
    };
    return Computadora;
}());
exports.default = Computadora;
