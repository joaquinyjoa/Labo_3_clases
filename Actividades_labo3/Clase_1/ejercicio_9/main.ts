// Función para calcular el factorial
function calFactorial(numero: number): number {
    if (numero < 0) {
        throw new Error("El factorial no está definido para números negativos.");
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función para calcular el cubo
function calcularCubo(numero: number): number {
    return Math.pow(numero, 3);
}

// Función principal que solicita un número y decide si calcular el factorial o el cubo
function procesarNumero(numero: number): void {
    if (numero >= 0) {
        const factorial = calFactorial(numero);
        console.log(`El factorial de ${numero} es: ${factorial}`);
    } else {
        const cubo = calcularCubo(numero);
        console.log(`El cubo de ${numero} es: ${cubo}`);
    }
}

// Ejemplo de uso:
procesarNumero(5);  // El factorial de 5 es: 120
procesarNumero(-3); // El cubo de -3 es: -27
