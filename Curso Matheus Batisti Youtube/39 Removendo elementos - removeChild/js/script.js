//Removendo elementos DOM com JS

//VISUALIZANDO e REMOVENDO ELEMENTO FILHO (elemento <p> que esta dentro do container)
var container = document.querySelector('#container')
console.log(container);
var p = document.querySelector("#container p");
container.removeChild(p);

//REMOVENDO ELEMENTO COMPLETO
var h2 = document.querySelector('.titulosecundario');
h2.remove();
