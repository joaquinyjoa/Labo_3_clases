"use strict";
window.onload = () => {
    let nombre = prompt("¿Cuál es tu nombre?");
    averiguarIdPais(nombre);
};
const averiguarIdPais = (nombre) => {
    let pagina = `https://api.nationalize.io/`;
    let params = "name=" + nombre.toString();
    let ajax = new Ajax();
    ajax.Get(pagina, (resultado) => {
        let obj_res = JSON.parse(resultado);
        let paisMasProb = obj_res.country.reduce((a, b) => {
            return a.probability > b.probability ? a : b;
        }, 0);
        document.getElementById("divResultado").innerHTML = `País más probable: ${paisMasProb.country_id}`;
    }, params, Falla);
};
function Falla(retorno) {
    console.clear();
    console.error(retorno);
}
//# sourceMappingURL=api_ajax.js.map