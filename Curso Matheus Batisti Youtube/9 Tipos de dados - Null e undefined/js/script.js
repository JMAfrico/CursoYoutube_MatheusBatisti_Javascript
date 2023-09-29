//Tipos de dados - Null e undefined
//Null é um tipo de dado que representa um valor
//Undefined é um tipo de dado para uma variavel com valor não atribuito

// Hoisting - As variaveis mesmo dada um valor antes dela ser inicializada
// ela fica com undefined. Ex:
//Inicializei depois de atribuir um valor. Ela terá um valor de undefined
titulo = "Presidente"
var titulo;
console.log(titulo)
//

/// Null
var nome = null;
console.log(nome)
nome = "Joao"
console.log(nome)

/// Undefined
var sobrenome;
console.log(sobrenome)
sobrenome = "Marcos"
console.log(sobrenome)
