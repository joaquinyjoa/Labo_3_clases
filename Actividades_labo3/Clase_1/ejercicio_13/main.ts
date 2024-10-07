// Función para sumar los dígitos de un número
function sumarDigitos(numero: number): number {
    return numero
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

// Función para descomponer el número en factores primos y sumar los dígitos de estos factores
function descomponerFactoresPrimos(numero: number): number {
    let divisor = 2;
    let sumaFactores = 0;

    while (numero > 1) {
        while (numero % divisor === 0) {
            sumaFactores += sumarDigitos(divisor);
            numero /= divisor;
        }
        divisor++;
    }

    return sumaFactores;
}

// Función para verificar si un número es un número de Smith
function esNumeroSmith(numero: number): boolean {
    // Si el número es primo, no es un número de Smith por definición
    if (esPrimo(numero)) {
        return false;
    }

    const sumaDigitosOriginal = sumarDigitos(numero);
    const sumaDigitosFactores = descomponerFactoresPrimos(numero);

    return sumaDigitosOriginal === sumaDigitosFactores;
}

// Función auxiliar para determinar si un número es primo
function esPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso:
const numero = 378;  // 378 = 2 × 3 × 3 × 3 × 7
if (esNumeroSmith(numero)) {
    console.log(`${numero} es un número de Smith.`);
} else {
    console.log(`${numero} no es un número de Smith.`);
}
