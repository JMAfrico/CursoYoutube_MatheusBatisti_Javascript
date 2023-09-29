//ADICIONAR CSS INLINE(NO ELEMENTO)
//ESSE TIPO DE ADIÇÃO, SUBSTITUI O QUE ESTIVER ESCRITO
//DENTRO DO ARQUIVO STYLE.CSS

//selecionar o elemento
var title = document.querySelector('#titulo');

// adicionar estilo ao elemento - COR
title.style.color = "red";
title.style.backgroundColor= "black";
//---------------------------------------------



// adicionar vários estilos de uma vez ao elemento
var subtitulo = document.querySelector('.titulosecundario');
subtitulo.style.cssText = "color: blue; background-color: pink; font-size:30px";

//---------------------------------------------
