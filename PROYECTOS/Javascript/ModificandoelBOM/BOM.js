'use strict'

//Browser object Model, usar las propiedades del navegador 

//para alto y ancho de pantalla
console.log(window.innerHeight);
console.log(window.innerWidth);
//Otra manera de hacer lo mismo
console.log(screen.width);
console.log(screen.height);
//El objeto locatio me da informacion sobre la url, el protocolo, la ip...etc
console.log(window.location);
//Con esto sacamos la url de la página, de esta manera podmeos cambiar la url para redireccionar al usuario a otra web.
console.log(window.location.href);
//Con esto, podemos abrir una nueva ventana al usuario
window.open("https://google.es", "", "wdith=400, height=300");