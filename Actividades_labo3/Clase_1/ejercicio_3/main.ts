function recorrido (numero:number, cadena?:string):void
{
    if (cadena) 
    {
        for (let index = 0; index < numero; index++)
        {
            console.log(cadena);
        }
    }
    else
    {
        for (let index = numero; index >= 0; index--)
        {
            console.log(index);
        }
    }
}

recorrido(5, "sss");
recorrido(3);