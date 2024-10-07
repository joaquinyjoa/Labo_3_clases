namespace Manejador {
    export function CrearAlumno(): void {
        // Obtener los valores de los inputs por ID
        let apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
        let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
        let legajo = parseInt((<HTMLInputElement>document.getElementById("legajo")).value);

        // Crear un objeto Alumno
        let alumno = new Prueba.Alumno(apellido, nombre, legajo);

        // Mostrar por consola
        console.log(alumno.ToString());

        // Mostrar por alert
        alert(alumno.ToString());
    }
}
