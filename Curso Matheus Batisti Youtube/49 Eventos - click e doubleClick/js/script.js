//Eventos

//Uma ação realizada pelo usuario
//É possível verificar movimento do mouse,click,posicionamento
//A partir disso eu posso criar um comportamento: animação, abrir e fechar menu

//click - a partir de um click

//selecionei o botão com o querySelector
var botao = document.querySelector('#botao');
console.log(botao);

//addEventListener passando a ação e a callback
//ou seja, o que quero que seja executado
//no retorno do click
//o 'this' se refere a próprio elemento que chamou o método(aqui o botao)
//Quando eu clicar no botão, aparece msg no console e a cor muda pra red
botao.addEventListener("click",function(){
    console.log('clicou no botao');
    console.log(this);
    this.style.color = 'red';
});

//Quando eu clicar no titulo, o subtitulo desaparece
var title = document.querySelector('#titulo');
title.addEventListener('click', function(){
    var subtitle = document.querySelector('.titulosecundario');
    subtitle.style.display = 'none';
})

//Quando eu clicar no titulo, o subtitulo desaparece
title.addEventListener('dblclick', function(){
    console.log('duplo clique');
})