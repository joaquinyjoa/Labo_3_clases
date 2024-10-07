function analizarCadena(cadena: string): void {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por minúsculas.");
    } else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}

// Ejemplo de uso:
analizarCadena("HOLA");  // La cadena está formada solo por mayúsculas.
analizarCadena("hola");  // La cadena está formada solo por minúsculas.
analizarCadena("Hola");  // La cadena está formada por una mezcla de mayúsculas y minúsculas.
