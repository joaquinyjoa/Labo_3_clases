"use strict";
var TestJsonAjax;
(function (TestJsonAjax) {
    function EnviarRecibirJSON() {
        let persona = { "nombre": "Juan", "edad": 35 };
        let pagina = "./BACKEND/json_test_enviar_recibir.php";
        let ajax = new Ajax();
        let params = "miPersona=" + JSON.stringify(persona);
        ajax.Post(pagina, (resultado) => {
            document.getElementById("divResultado").innerHTML = resultado;
            console.clear();
            console.log(resultado);
            let objJson = JSON.parse(resultado);
            let cadena = objJson.nombre + " - " + objJson.edad;
            console.log(cadena);
            document.getElementById("divResultado").innerHTML = cadena;
        }, params, Fail);
    }
    TestJsonAjax.EnviarRecibirJSON = EnviarRecibirJSON;
    function Fail(retorno) {
        console.clear();
        console.error("ERROR!!!");
        console.log(retorno);
    }
})(TestJsonAjax || (TestJsonAjax = {}));
//# sourceMappingURL=manejadoraAjaxJSON.js.map