//Criando Dom com JS

//------------------------------------------
//INSERIR O ELEMENTO NO BODY
// criar a tag, criar o texto e depois adicionar ao HTML

// novo paragrafo <p>
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

// texto do paragrafo
var textoDoParagrafo = document.createTextNode("Esté é o texto do paragrafo");

// inserir o texto ao paragrafo
novoParagrafo.appendChild(textoDoParagrafo);


//inserir o paragrafo + texto ao HTML
var body = document.querySelector('body');
body.appendChild(novoParagrafo);

//------------------------------------------

//INSERIR O ELEMENTO EM UM CONTEINER
var container = document.querySelector('#container')
console.log(container);

var elementoContainer = document.createElement("span");
console.log(elementoContainer);

var textoSpan = document.createTextNode("Bala");
elementoContainer.appendChild(textoSpan);

container.appendChild(elementoContainer);