"use strict";
function calFactorial(numero) {
    if (numero < 0) {
        throw new Error("El factorial no está definido para números negativos.");
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
function calcularCubo(numero) {
    return Math.pow(numero, 3);
}
function procesarNumero(numero) {
    if (numero >= 0) {
        const factorial = calFactorial(numero);
        console.log(`El factorial de ${numero} es: ${factorial}`);
    }
    else {
        const cubo = calcularCubo(numero);
        console.log(`El cubo de ${numero} es: ${cubo}`);
    }
}
procesarNumero(5);
procesarNumero(-3);
//# sourceMappingURL=main.js.map