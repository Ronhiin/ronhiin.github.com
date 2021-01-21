'use strict'
//todo esto carga antes del DOM
var tiempo;
//variable booleana para saber si el tiempo esta activo o no
var estaElTiempoActivo;

function intervalo() {
    //ejecuta lo de dentro de la funcion cada x segundo. en este caso 3000ms que son 3segundos
    var tiempo = setInterval(() => {
        estaElTiempoActivo = true;
        console.log("set interval ejecutado");

        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
        } else {
            encabezado.style.fontSize = "50px";
        }



    }, 2000);

    return tiempo;
}





//Todo esto carga despues del DOM
window.addEventListener('load', () => {

    //timers



    //el setTimeout, solo se ejecuta 1 vez cuando pase le tiempo.

    var tiempo2 = setTimeout(() => {

        var boton = document.querySelector("#boton");

        boton.style.background = "blue";
        boton.style.color = "white";



        console.log("set timeout ejecutado");
    }, 10000);

    //boton que detiene el parpadeo con clearInterval

    var boton2 = document.querySelector("#stop");

    boton2.addEventListener("click", () => {
        alert("Has parado el intervalo");
        clearInterval(tiempo);
        //tiempo = 0;
        estaElTiempoActivo = false;
    });

    //boton para iniciar el intervalo
    var boton3 = document.querySelector("#start");

    boton3.addEventListener("click", () => {

        //clearInterval(tiempo);
        if (estaElTiempoActivo) {
            alert("Ya has iniciado el tiempo antes")
        } else {
            alert("Has iniciado el intervalo");
            tiempo = intervalo();
        }
    });







});