"use strict";
const url = "http://localhost/indicar_subcarpetas_aquí/BACKEND/nexo.php";
const handleFetch = async (url, options) => {
    const res = await fetch(url, options);
    return await handleError(res);
};
const handleError = (res) => {
    if (!res.ok)
        throw new Error(res.statusText);
    return res;
};
async function Agregar() {
    alert("implementar 'Agregar'...");
}
async function Listar() {
    alert("implementar 'Listar'...");
}
async function Modificar() {
    alert("implementar 'Modificar'...");
}
async function Borrar() {
    alert("implementar 'Borrar'...");
}
//# sourceMappingURL=funciones.js.map