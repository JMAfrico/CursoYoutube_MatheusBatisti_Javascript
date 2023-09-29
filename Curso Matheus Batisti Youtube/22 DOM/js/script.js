//Objetivo: Alterar o HTML 
//Como: Adicionar uma lista de frutas via javascript,sem alterar o HTML

//Meu documento HTML tem o body mas não tem uma lista não ordenada
//O que vou fazer aqui é via javascript criar uma lista não ordenada(UL)
//Adicionar a lista UL dentro do body
//Criar uma lista de frutas
//Criar uma lista itens de frutas(li) e adicionar essas frutas dentro da lista Ul


//Parte 1-------------------------------------- 

// Criação de uma lista de frutas
var frutas = ['Laranja','Maça','Pera','Jaca','Limão']

//Criando uma lista Ul em HTML e passando para uma variavel
var listaUl = document.createElement('ul');

//Chamando a tag body e passando para uma variável
var body = document.getElementsByTagName('body');

//adicionar dentro do body a listaUl
body[0].appendChild(listaUl);

//---------------------------------------------

//Parte 2 -------------------------------------

//Passou para uma variável a lista Ul criada em HTML
var listaNoBody = document.getElementsByTagName('ul');

//Criando uma lista de itens(li) e passando para variavel liFor, 
//capturar o texto de cada frutas[i] e passando para variavel DOM de texto
//adicionar a fruta capturada no item da lista na liFor
//adicionar todos os itens capturados(li) na lista nao ordenada(ul)
for(i = 0 ; i < frutas.length; i++){
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(frutas[i]);
    liFor.appendChild(textoLi)
    listaNoBody[0].appendChild(liFor)
    console.log(liFor)
}

//--------------------------------------------

