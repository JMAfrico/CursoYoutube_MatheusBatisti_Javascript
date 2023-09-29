//TROCAR ELEMENTOS VIA DOM (trocar a tag por outra)

//1-CRIO O ELEMENTO A SER ADICIONADO NO LUGAR DO OUTRO E ADICIONO UM NOME
//2-SELECIONO O ELEMENTO QUE QUERO SUBSTITUIR
//3-SELECIONO O PAI DO ELEMENTO QUE QUERO SUBSTITUIR
//4- COM O PAI, CHAMO O MÉTODO replaceChild, passo o elemento a ser adicionado e o elemento a ser removido

var textoH3 = "Lista de pedidos";

//criar elemento
var h3 = document.createElement('h3');

//nomear uma classe para o elemento criado
h3.classList = "testando-classe";

//adicionando um texto para o H3
var texto = document.createTextNode(textoH3);
h3.appendChild(texto);

console.log(h3);


//selecionar o elemento que quero trocar
var title = document.querySelector('#titulo');
console.log(title);

//selecionar o pai do elemento
var pai = title.parentNode;

//trocar o elementos(novo elemento, elemento que quero substituir)
//quero adicionar o h3 no lugar do title
pai.replaceChild(h3,title);


