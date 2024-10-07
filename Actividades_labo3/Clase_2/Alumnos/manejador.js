"use strict";
var Manejador;
(function (Manejador) {
    function CrearAlumno() {
        let apellido = document.getElementById("apellido").value;
        let nombre = document.getElementById("nombre").value;
        let legajo = parseInt(document.getElementById("legajo").value);
        let alumno = new Prueba.Alumno(apellido, nombre, legajo);
        console.log(alumno.ToString());
        alert(alumno.ToString());
    }
    Manejador.CrearAlumno = CrearAlumno;
})(Manejador || (Manejador = {}));
//# sourceMappingURL=manejador.js.map