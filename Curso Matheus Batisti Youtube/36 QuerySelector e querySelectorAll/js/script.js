//QuerySelector e QuerySelectorAll
// Seletores que usam CSS para recuperar os elementos do HTML

//#id 
//.classe
//tag nao precisa de caminho

// acessando HTML por QuerySelectorAll - Varios itens
//Navega pelo id (#)lista2 , em seguida pela tag li
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

//Navega pelo id (#)lista , em seguida pela classe item
var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);


// acessando HTML por querySelector - Puxa só um elemento
var item = document.querySelector('#lista')
console.log(item);

var itemSpan = document.querySelector('#paragrafo span')
console.log(itemSpan);