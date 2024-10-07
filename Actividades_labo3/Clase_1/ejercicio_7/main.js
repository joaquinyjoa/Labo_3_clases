"use strict";
function essPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function MostrarNumerosPrimos() {
    let contadorPrimos = 0;
    let numero = 2;
    while (contadorPrimos < 20) {
        if (essPrimo(numero)) {
            console.log(numero);
            contadorPrimos++;
        }
        numero++;
    }
}
MostrarNumerosPrimos();
//# sourceMappingURL=main.js.map