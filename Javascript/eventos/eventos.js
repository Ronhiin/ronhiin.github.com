'use strict'

//evento load, carga lo que este dentro, cuando el HTML este totalmente cargado
window.addEventListener('load', () => {


    //Eventos

    //eventos del ratón


    //funcion que cambai el color del boton cuando lo pulsamos
    function cambiarColor() {

        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");
    //añadimos el evento click al boton
    boton.addEventListener('click', function() {
        cambiarColor();
    });

    //Evento MouseOver

    boton.addEventListener('mouseover', function() {
        boton.style.background = "#ccc";
        boton.style.color = "black";
    });

    //Mouseout
    boton.addEventListener('mouseout', function() {
        boton.style.background = "#444";
        boton.style.color = "white";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function() {
        console.log("[focus]Estas haciendo foco en el input");
    });



    //blur
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('blur', function() {
        console.log("[blur]Estas fuera del foco en el input");
    });

    //keydown
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown', function(event) {
        console.log("[KeyDown]Has pulsado", String.fromCharCode(event.keyCode));

    });
    //keypress
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown', function(event) {
        console.log("[KeyPress]Has pulsado", String.fromCharCode(event.keyCode));

    });

    //Keyup
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keyup', function(event) {
        console.log("[Keyup]Has soltado", String.fromCharCode(event.keyCode));

    });

});