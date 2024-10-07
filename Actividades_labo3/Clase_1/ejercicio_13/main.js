"use strict";
function sumarDigitos(numero) {
    return numero
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}
function descomponerFactoresPrimos(numero) {
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
function esNumeroSmith(numero) {
    if (esPrimo(numero)) {
        return false;
    }
    const sumaDigitosOriginal = sumarDigitos(numero);
    const sumaDigitosFactores = descomponerFactoresPrimos(numero);
    return sumaDigitosOriginal === sumaDigitosFactores;
}
function esPrimo(numero) {
    if (numero <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
const numero = 378;
if (esNumeroSmith(numero)) {
    console.log(`${numero} es un número de Smith.`);
}
else {
    console.log(`${numero} no es un número de Smith.`);
}
//# sourceMappingURL=main.js.map