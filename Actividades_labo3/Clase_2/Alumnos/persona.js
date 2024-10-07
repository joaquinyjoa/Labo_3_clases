"use strict";
var Prueba;
(function (Prueba) {
    class Persona {
        get Apellido() {
            return this.apellido;
        }
        set Apellido(value) {
            this.apellido = value;
        }
        get Nombre() {
            return this.nombre;
        }
        set Nombre(value) {
            this.nombre = value;
        }
        constructor(apellido, nombre) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        ToString() {
            return `Apellido: ${this.apellido}, Nombre: ${this.nombre}`;
        }
    }
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=persona.js.map