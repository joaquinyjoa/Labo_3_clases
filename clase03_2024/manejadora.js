"use strict";
var Test;
(function (Test) {
    let xhttp = new XMLHttpRequest();
    function Ajax() {
        xhttp.open("GET", "BACKEND/ajax_test.php", true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            console.log(xhttp.readyState + " - " + xhttp.status);
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("divResultado").innerHTML = xhttp.responseText;
            }
        };
    }
    Test.Ajax = Ajax;
    function AjaxGET() {
        xhttp.open("GET", "BACKEND/ajax_test.php?valor=" + Math.random() * 100, true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("divResultado").innerHTML = xhttp.responseText;
            }
        };
    }
    Test.AjaxGET = AjaxGET;
    function AjaxPOST() {
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        let form = new FormData();
        form.append('valor', (Math.random() * 100).toString());
        xhttp.send(form);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("divResultado").innerHTML = xhttp.responseText;
            }
        };
    }
    Test.AjaxPOST = AjaxPOST;
    function ActualizarGET() {
        xhttp.open("GET", "BACKEND/ajax_test.php?valor=" + Math.random() * 100, true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            AdministrarRespuesta();
        };
    }
    Test.ActualizarGET = ActualizarGET;
    function ActualizarPOST() {
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("valor=" + Math.random() * 100);
        xhttp.onreadystatechange = () => {
            AdministrarRespuesta();
        };
    }
    Test.ActualizarPOST = ActualizarPOST;
    function AdministrarRespuesta() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("divResultado").innerHTML = xhttp.responseText;
        }
    }
    function ProcesoLargo() {
        let pagina = "BACKEND/proceso_largo.php";
        let div = document.getElementById("divResultado");
        div.innerHTML = "";
        AdministrarGif(true, 1);
        xhttp.open("POST", pagina, true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send(null);
        xhttp.onreadystatechange = () => {
            const DONE = 4;
            const OK = 200;
            if (xhttp.readyState === DONE) {
                if (xhttp.status === OK) {
                    div.innerHTML = xhttp.responseText;
                }
                else {
                    console.error("Error\n" + xhttp.status);
                }
                AdministrarGif(false);
            }
        };
    }
    Test.ProcesoLargo = ProcesoLargo;
    function AdministrarGif(mostrar, cual = 1) {
        let gif = cual === 1 ? "AJAX/Iphone-spinner-2.gif" : "AJAX/Billiard-ball.gif";
        let div = document.getElementById("divGif");
        let img = document.getElementById("imgGif");
        if (mostrar) {
            div.style.display = "block";
            div.style.top = "45%";
            div.style.left = "45%";
            img.src = gif;
        }
        else {
            div.style.display = "none";
            img.src = "";
        }
    }
    function IrHacia(pagina) {
        window.location.href = pagina;
    }
    Test.IrHacia = IrHacia;
})(Test || (Test = {}));
//# sourceMappingURL=manejadora.js.map