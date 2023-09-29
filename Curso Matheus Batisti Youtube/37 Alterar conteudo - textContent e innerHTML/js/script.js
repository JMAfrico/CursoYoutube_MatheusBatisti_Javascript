//Alterando o conteudo do HTML

// innerHTML
var title = document.querySelector('#titulo');
console.log(title);
title.innerHTML = "Testando o texto alterado por InnerHTML";

//textContent(mais utilizado)
var title2 = document.querySelector('.titulosecundario');
console.log(title2);
title2.textContent = "Testando o texto alterado com textContent"