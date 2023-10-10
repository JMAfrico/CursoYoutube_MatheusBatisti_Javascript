//Eventos

//Uma ação realizada pelo usuario
//É possível verificar movimento do mouse,click,posicionamento
//A partir disso eu posso criar um comportamento: animação, abrir e fechar menu

//keydown
//adicionei no documento o evento keydown, toda vez que aperto
//qualquer tecla esse evento é capturado
document.addEventListener("keydown", function(event){
    console.log(event);
});

//qualquer tecla esse evento é capturado, mas consigo ver a tecla no log
document.addEventListener("keydown", function(event){
    console.log(event.key);
});

//adicionando condicional para tecla
document.addEventListener("keydown", function(event){
    console.log(event.key);
    if(event.key =="Enter"){
        console.log("Apertou o enter");
    }
});


//keydown
//adicionei no documento o evento keyup, toda vez que solto a tecla
document.addEventListener("keyup", function(event){
    console.log(event.key);
    if(event.key =="Enter"){
        console.log("Soltou o enter");
    }
});