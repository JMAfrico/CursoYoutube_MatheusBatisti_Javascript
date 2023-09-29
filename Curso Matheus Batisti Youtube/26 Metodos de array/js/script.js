//Funcoes de array

//propriedade
// .lenght Retorna a quantidade de elementos no array
var numeros = [1,28,36,455,5];
console.log(numeros);
console.log(numeros.length)

// .push() Adiciona um elemento novo no final do array existente
numeros.push(18)
console.log(numeros);
console.log(numeros.length)

// .pop() Remove o elemento no fim do array
numeros.pop();
console.log(numeros);
console.log(numeros.length)

// .unshift() Adiciona um elemento novo no inicio do array existente
numeros.unshift(18)
console.log(numeros);
console.log(numeros.length)

// .shift() Remove o elemento no inicio do array
numeros.shift();
console.log(numeros);
console.log(numeros.length)

// Acessar o ultimo elemento do array
console.log(numeros[numeros.length-1])

// isArray() Retorna se é um array
console.log(Array.isArray(numeros))

// splice - Adiciona um elemento no meio do array
//Param 1: Escolho a posição onde quero adicionar (2)
//Param 2: Quantos elementos quero deletar (0)
//Param 3: Elemento que quero adicionar
numeros.splice(2,0,999)
console.log(numeros)

//Param 1: Escolho a posição onde quero adicionar (3)
//Param 2: Quantos elementos quero deletar dessa posição para frente (3)
//Param 3: Elemento que quero adicionar
numeros.splice(3,3,997)
console.log(numeros)

//Remover um elemento específico do array
//Param 1: acesso o indice que quero remover
//Param 2: 1
numeros.splice(2,1)
console.log(numeros)

//indexOf - encontra a posição do elemento
console.log(numeros.indexOf(28))

// join - Transformar arrays em String. Junta tudo em uma variavel e pelo parâmetro posso
// criar um separador
var nome = ["Joao","Marcos","Africo","da","Silva"]
console.log(nome.join(" "));
console.log(nome.join("-"));

// reverse - inverte a ordem dos elementos
console.log(nome.reverse());