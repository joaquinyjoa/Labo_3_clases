"use strict";
window.onload = () => {
    let nombre = prompt("¿Cuál es tu nombre?");
    averiguarPais(nombre);
};
const averiguarPais = (nombre) => {
    let pagina = `https://api.nationalize.io/`;
    let params = "name=" + nombre.toString();
    let ajax = new Ajax();
    ajax.Get(pagina, (resultado) => {
        let obj_res = JSON.parse(resultado);
        let paisMasProb = obj_res.country.reduce((a, b) => {
            return a.probability > b.probability ? a : b;
        }, 0);
        console.log(paisMasProb.country_id);
        pagina = `https://restcountries.com/v3.1/alpha/${paisMasProb.country_id}`;
        params = '';
        ajax.Get(pagina, (res) => {
            console.log(res);
            obj_res = JSON.parse(res);
            document.getElementById("divResultado").innerHTML = `País más probable: ${obj_res[0].translations.spa.common}`;
        }, params, Errores);
    }, params, Errores);
};
function Errores(retorno) {
    console.clear();
    console.error(retorno);
}
//# sourceMappingURL=api_compuesta_ajax.js.map