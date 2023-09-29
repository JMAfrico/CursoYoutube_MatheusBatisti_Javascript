//DOM - Documento Object model
// Por meio dele podemos manusear,alterar,incluir eventos no HTML
// Interface no HTML

// Acessamos o HTML no javascript pelo DOM


// Usamos a propriedade document para acessar o HTML

// acessando HTML por tag
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lista = document.getElementsByTagName('li');
console.log(lista);
console.log(lista[2]);

// acessando HTML por id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

// acessando HTML por classe
var lista2 = document.getElementsByClassName('item');
console.log(lista2);