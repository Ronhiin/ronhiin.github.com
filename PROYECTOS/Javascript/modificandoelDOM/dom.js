'use strict'


function cambiaColor(color) {
    caja.style.backgroundColor = color;
}

//seleccionar por id,
//var caja = document.getElementById("micaja");

//podemos hacerlo mejor por queryselector, que seleccionamos igual que en css, aunque solo nos sirve para seleccionar un elemento. SI tenemos que seleccionar mas d eun elemento, es mejor la otra forma.
//para usar query selector para mas de 1, usamos querySelectorAll();
var caja = document.querySelector("#micaja");

//innerHTML coge lo de dentro, el texto y puedo cambiarlo.
caja.innerHTML = "qe pasa";
//para cambiar estilos
caja.style.backgroundColor = "red";
caja.style.padding = "20px";
caja.style.color = "white";
//para añadir una clase
caja.className = "hola";


/* ------------------------------------- */

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

console.log(todosLosDivs[2].innerHTML);
todosLosDivs[2].innerHTML = "Cambiando el texto del segundo div ";

//Bucle para añadir parrafos con textos dentro de una seccion
//creamos la variable
var valor;
//bucle que recorre todos los Divs que estan metidos dentro de la variable todoslosdivs
for (valor in todosLosDivs) {
    //hacemos el if para que solo cree elementos cuando el valor de los divs sea un string
    if (typeof todosLosDivs[valor].textContent == 'string') {
        //creamos la variable parrafo, el cual crea un elemento p
        var parrafo = document.createElement("p");
        //creamos la variable texto que crea un texto, en este caso copia el texto de los elementos divs
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        //Metemos el texto dentro de parrafo 
        //append añade despues de
        parrafo.append(texto);
        //seleccionamos el id miseccion y dentro metemos el parrafo con el texto previamente metido
        //prepend añade antes de , por lo que lo pone antes del hr del html
        document.querySelector("#miseccion").prepend(parrafo);
    }
}



//conseguir elementos por su clase css
//seleccionamos todos los divs con la clase rojo
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
//creamos la clase div para usar el for
var div;
//por cada div en divsrojos
for (div in divsRojos) {
    //tenemos que usar un if porque el elemento recorre tambien el total de divs, por lo que nos marca una advertencia en consola
    if (divsRojos[div].className == "rojo") {
        //cambia el color de fondo a rojo
        divsRojos[div].style.backgroundColor = "red";
    }
}
divsAmarillos[0].style.backgroundColor = "yellow";