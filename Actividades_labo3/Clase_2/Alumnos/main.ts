namespace TestPrueba {
    // Creación de cuatro alumnos
    let alumnos: Array<Prueba.Persona> = [
        new Prueba.Alumno("González", "Juan", 1001),
        new Prueba.Alumno("Pérez", "María", 1002),
        new Prueba.Alumno("Rodríguez", "Pedro", 1003),
        new Prueba.Alumno("López", "Ana", 1004),
    ];

    // Mostrar por consola los alumnos
    alumnos.forEach(alumno => {
        console.log(alumno.ToString());
    });
}
