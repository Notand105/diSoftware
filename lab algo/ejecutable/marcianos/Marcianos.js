"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Marcianos {
    constructor() {
        Marcianos.cantidad = 10;
    }
    static getMarcianos() {
        return Marcianos.marcianos;
    }
    derribaMarcianos() {
        if (Marcianos.cantidad > 0) {
            Marcianos.cantidad--;
            console.log("Soy el bueno, derribe un marciano");
        }
    }
    crearMarciano() {
        if (Marcianos.cantidad > 0) {
            Marcianos.cantidad++;
            console.log("soy el malo, cree un marciano");
        }
    }
    cuantosQuedan(print) {
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
    }
}
Marcianos.marcianos = new Marcianos();
exports.default = Marcianos;
