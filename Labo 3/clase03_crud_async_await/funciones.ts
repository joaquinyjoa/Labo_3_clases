
const url : string = "http://localhost/indicar_subcarpetas_aquí/BACKEND/nexo.php";

const handleFetch = async (url:RequestInfo, options:RequestInit):Promise<Response> => {

    const res : Response = await fetch(url, options);
    
    return await handleError(res);
}
    
const handleError = (res:Response):Response => {
    
    if (!res.ok) throw new Error(res.statusText);
    
    return res;
}

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