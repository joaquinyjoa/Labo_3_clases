"use strict";
var TestPrueba;
(function (TestPrueba) {
    let alumnos = [
        new Prueba.Alumno("González", "Juan", 1001),
        new Prueba.Alumno("Pérez", "María", 1002),
        new Prueba.Alumno("Rodríguez", "Pedro", 1003),
        new Prueba.Alumno("López", "Ana", 1004),
    ];
    alumnos.forEach(alumno => {
        console.log(alumno.ToString());
    });
})(TestPrueba || (TestPrueba = {}));
//# sourceMappingURL=main.js.map