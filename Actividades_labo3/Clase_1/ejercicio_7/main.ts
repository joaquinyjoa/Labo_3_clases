function essPrimo(numero: number): boolean 
{
    if (numero < 2)
    {
        return false;
    }
    if (numero === 2)
    {
        return true;
    }
    if (numero % 2 === 0) 
    {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) 
    {
        if (numero % i === 0)
        {
            return false;
        }
    }
    return true;
}

function MostrarNumerosPrimos(): void 
{
    let contadorPrimos = 0; // Contador de números primos encontrados
    let numero = 2; // Comenzamos con el número 2

    while (contadorPrimos < 20)
    {
        if (essPrimo(numero)) 
        {
            console.log(numero); // Mostrar el número primo
            contadorPrimos++; // Incrementar el contador de primos encontrados
        }
        numero++; // Probar el siguiente número
    }
}

MostrarNumerosPrimos();