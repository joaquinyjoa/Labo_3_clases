function esPalindromo(cadena: string): boolean {
    // Convertir a minúsculas y eliminar espacios en blanco
    const cadenaLimpia = cadena.toLowerCase().replace(/\s+/g, '');

    // Invertir la cadena
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');

    // Comparar la cadena original con la invertida
    return cadenaLimpia === cadenaInvertida;
}

// Ejemplo de uso:
const ejemplo = "La ruta nos aporto otro paso natural";
if (esPalindromo(ejemplo)) {
    console.log(`"${ejemplo}" es un palíndromo.`);
} else {
    console.log(`"${ejemplo}" no es un palíndromo.`);
}
