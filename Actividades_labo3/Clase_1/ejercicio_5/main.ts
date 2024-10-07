var nombre : string = "Joaquin Hernan";
var apellido : string = "Alfredo Greco";

function MostrarNombreApellido(a : string, b : string):void
{
    console.log(`${a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()},${b.toUpperCase()}`);
}

MostrarNombreApellido(nombre, apellido);