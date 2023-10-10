//Eventos

//Uma ação realizada pelo usuario
//É possível verificar movimento do mouse,click,posicionamento
//A partir disso eu posso criar um comportamento: animação, abrir e fechar menu

//mouseover - a partir do posicionamento do mouse
//selecionei o botão com o querySelector
var botao = document.querySelector('#botao');
console.log(botao);

botao.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
})

//mouseout - a partir do posicionamento do mouse
botao.addEventListener("mouseout", function(){
    this.style.backgroundColor = "gray";
})

