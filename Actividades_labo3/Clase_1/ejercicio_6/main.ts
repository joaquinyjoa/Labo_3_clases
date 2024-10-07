function elevarCubo(numero:number) : number
{
    let valor : number = numero;
    for (let index = 0; index < numero; index++)
    {
        numero *= valor; 
    }
    return numero;
}

let cubo : Number = elevarCubo(2);
console.log(cubo);