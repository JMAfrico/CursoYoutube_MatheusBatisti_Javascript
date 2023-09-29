//Métodos e propriedades objeto: String

//Propriedades
// .length - retorna a quantidade de caracteres da palavra
var nome = "Joao Marcos Africo da Silva Silva";
console.log(nome.length);

// .indexOf = retorna a posição do caractere
console.log(nome[2]) // Retorna o caractere na posição
console.log(nome.indexOf("Silva")); //encontro a posição do inicio da palavra
console.log(nome.lastIndexOf("Silva"))//encontro a ultima posição do inicio da palavra

// .slice - Retorna uma parte da String, passando a posição inicial e final do caractere
nomeCortado = nome.slice(12,18);
console.log(nomeCortado);

// .replace - Altera uma palavra por outra
nomeAlterado = nome.replace("Marcos","Marques");
console.log(nomeAlterado);

//Métodos
//toLowerCase - Altera o texto para letra minuscula
console.log(nome.toLocaleLowerCase());

//to Uppercase - Altera o texto para letra maiuscula
console.log(nome.toUpperCase());

// trim - Remove os espaços em branco
var nomeSemEspaco = "    Joaozeras          Africo"
console.log(nomeSemEspaco);
var nomeComEspaco = nomeSemEspaco.trim();
console.log(nomeComEspaco);

// split - Pega um texto e transforma ele em Array, pelo parametro que eu passar
//Ex: cada espaço, vai separar uma posição nova de um array
console.log(nome.split(" "));
//Ex: cada virgula, vai separar um valor que veio pelo front end,(JSON)
var techs = "Java, Linux, Cobol, C#, Agil";
console.log(techs.split(", "))