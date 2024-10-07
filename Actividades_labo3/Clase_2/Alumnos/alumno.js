"use strict";
var Prueba;
(function (Prueba) {
    class Alumno extends Prueba.Persona {
        get Legajo() {
            return this.legajo;
        }
        set Legajo(value) {
            this.legajo = value;
        }
        constructor(apellido, nombre, legajo) {
            super(apellido, nombre);
            this.legajo = legajo;
        }
        ToString() {
            return `${super.ToString()}, Legajo: ${this.legajo}`;
        }
    }
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=alumno.js.map