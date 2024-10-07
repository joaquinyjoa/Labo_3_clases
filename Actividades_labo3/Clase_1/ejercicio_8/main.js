"use strict";
function calcularFactorial(numero) {
    if (numero < 0) {
        console.log("El factorial no está definido para números negativos.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}
let factorial = calcularFactorial(10);
console.log(factorial);
//# sourceMappingURL=main.js.map