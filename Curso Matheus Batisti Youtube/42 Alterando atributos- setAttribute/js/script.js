//ALTERANDO ATRIBUTOS VIA DOM (trocar a tag por outra)

//selecionar o elemento, setar o atributo classe para o titulo
var title = document.querySelector('#titulo');
title.setAttribute("class", "testando-atributo");
console.log(title);


//selecionar o elemento botão pela tag, setei um ID
var button = document.getElementsByTagName('button')[0]
button.setAttribute("id","botao-ok");

//Peguei o Id do botão, e setei um atributo disabled, deixa o botao inativo
var btn = document.querySelector("#botao-ok");
btn.setAttribute("disabled","disabled");


//remover atributo
var h2Classe = document.querySelector('.titulosecundario');
h2Classe.removeAttribute("class");