'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit', () => {

        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        //validador de datos, trim quita espacios
        if (nombre.trim() == null | nombre.trim().length == 0) {
            alert("El nombre no es valido");
            return false;
        }
        if (apellido.trim() == null | apellido.trim().length == 0) {
            alert("Los apellidos no son validos");
            return false;
        }
        if (edad == null | edad <= 0 || isNaN(edad)) {
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellido, edad];

        var indice;
        for (indice in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }





    })



});