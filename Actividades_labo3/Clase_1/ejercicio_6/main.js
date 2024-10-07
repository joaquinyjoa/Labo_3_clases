"use strict";
function elevarCubo(numero) {
    let valor = numero;
    for (let index = 0; index < numero; index++) {
        numero *= valor;
    }
    return numero;
}
let cubo = elevarCubo(2);
console.log(cubo);
//# sourceMappingURL=main.js.map