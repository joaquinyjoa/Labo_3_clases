function calcularFactorial(numero: number): void {
    if (numero < 0)
    {
        console.log("El factorial no está definido para números negativos.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
}

// Ejemplo de uso:
let factorial : void = calcularFactorial(10);  // El factorial de 5 es: 120
console.log(factorial);