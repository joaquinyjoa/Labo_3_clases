"use strict";
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s+/g, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}
const ejemplo = "La ruta nos aporto otro paso natural";
if (esPalindromo(ejemplo)) {
    console.log(`"${ejemplo}" es un palíndromo.`);
}
else {
    console.log(`"${ejemplo}" no es un palíndromo.`);
}
//# sourceMappingURL=main.js.map