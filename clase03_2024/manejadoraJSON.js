"use strict";
var TestJSON;
(function (TestJSON) {
    function EjemplosJSON(queEjemplo) {
        switch (queEjemplo) {
            case 1:
                console.clear();
                document.getElementById("divResultado").innerHTML = "";
                let persona = { "nombre": "Juan", "edad": 35 };
                let cadenaJSON = "objeto = " + persona.nombre + " - " + persona.edad;
                console.log(cadenaJSON);
                document.getElementById("divResultado").innerHTML = cadenaJSON;
                cadenaJSON = "array = " + persona["nombre"] + " - " + persona["edad"];
                console.log(cadenaJSON);
                document.getElementById("divResultado").innerHTML += "<br>" + cadenaJSON;
                break;
            case 2:
                console.clear();
                document.getElementById("divResultado").innerHTML = "";
                let personas = [
                    { "nombre": "Juan", "edad": 35 },
                    { "nombre": "Anibal", "edad": 26 }
                ];
                for (let i = 0; i < personas.length; i++) {
                    console.log(personas[i].nombre + " - " + personas[i].edad);
                    document.getElementById("divResultado").innerHTML += personas[i].nombre + " - " + personas[i].edad + "<br>";
                }
                break;
            case 3:
                console.clear();
                document.getElementById("divResultado").innerHTML = "Desde un array de JSON<br>";
                let cadJSON = ' [{ "nombre" : "Juan", "edad" : 35 },{ "nombre" : "Anibal", "edad" : 26 }] ';
                let personasJSON = JSON.parse(cadJSON);
                for (let i = 0; i < personasJSON.length; i++) {
                    console.log(personasJSON[i].nombre + " - " + personasJSON[i].edad);
                    document.getElementById("divResultado").innerHTML += personasJSON[i].nombre + " - " + personasJSON[i].edad + "<br>";
                }
                break;
            case 4:
                console.clear();
                document.getElementById("divResultado").innerHTML = "Desde un objeto JSON<br>";
                let p = { "nombre": "Juan", "edad": 35 };
                let toString = JSON.stringify(p);
                console.log(toString);
                let obj = JSON.parse(toString);
                console.log(obj.nombre + " - " + obj.edad);
                document.getElementById("divResultado").innerHTML += obj.nombre + " - " + obj.edad;
                break;
            case 5:
                console.clear();
                document.getElementById("divResultado").innerHTML = "";
                let cadena = "";
                let personaFunc = {
                    "nombre": "Jorge",
                    "edad": 23,
                    "saludar": function () {
                        return "Hola soy " + this.nombre + " y tengo " + this.edad + ".";
                    }
                };
                cadena = personaFunc.saludar();
                console.log(cadena);
                document.getElementById("divResultado").innerHTML = cadena;
                break;
            case 6:
                console.clear();
                document.getElementById("divResultado").innerHTML = "";
                let cadenaArray = "";
                let personasFunc = {
                    "personas": [
                        { "nombre": "Juan", "edad": 35 },
                        { "nombre": "Anibal", "edad": 26 }
                    ],
                    "saludarTodos": function () {
                        let ret = "";
                        for (let i = 0; i < this.personas.length; i++) {
                            ret += "Hola soy " + this.personas[i].nombre + " y tengo " + this.personas[i].edad + ". ";
                        }
                        return ret;
                    }
                };
                cadenaArray = personasFunc.saludarTodos();
                console.log(cadenaArray);
                document.getElementById("divResultado").innerHTML = cadenaArray;
                break;
        }
    }
    TestJSON.EjemplosJSON = EjemplosJSON;
    function IrHacia(pagina) {
        window.location.href = pagina;
    }
    TestJSON.IrHacia = IrHacia;
})(TestJSON || (TestJSON = {}));
//# sourceMappingURL=manejadoraJSON.js.map