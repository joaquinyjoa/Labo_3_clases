function esImpar(numero:number):string
{
    var mensaje : string;
    if (numero % 2 == 0)
    {
        mensaje = `El número ${numero} es par.`
    }
    else
    {
        mensaje = `El número ${numero} es par.`
    }
    return mensaje;
}

let validar : Function = esImpar;
console.log(validar(4));