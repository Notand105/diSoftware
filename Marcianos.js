"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Marcianos = /** @class */ (function () {
    function Marcianos() {
        Marcianos.cantidad = 10;
    }
    Marcianos.getMarcianos = function () {
        return Marcianos.marcianos;
    };
    Marcianos.prototype.derribaMarcianos = function () {
        if (Marcianos.cantidad > 0) {
            Marcianos.cantidad--;
            console.log("Soy el bueno, derribe un marciano");
        }
    };
    Marcianos.prototype.crearMarciano = function () {
        if (Marcianos.cantidad > 0) {
            Marcianos.cantidad++;
            console.log("soy el malo, cree un marciano");
        }
    };
    Marcianos.prototype.cuantosQuedan = function (print) {
        if (Marcianos.cantidad > 0) {
            if (print) {
                console.log("Quedan : ", Marcianos.cantidad, " de marcianos");
            }
        }
        else {
            if (print) {
                console.log("Felicidades has ganado");
            }
        }
        return Marcianos.cantidad;
    };
    Marcianos.marcianos = new Marcianos();
    return Marcianos;
}());
exports.default = Marcianos;
