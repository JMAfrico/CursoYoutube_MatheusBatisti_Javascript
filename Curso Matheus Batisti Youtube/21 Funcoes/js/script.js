//As funções em javascript não precisam de um tipo de retorno
//As funções em javascript não precisam de tipo de dado nos parametros
//As funções em javascript não precisam armazenar o resultado em uma variável tipada


function primeiraFuncao() {
    console.log("Hello World");
}

primeiraFuncao();

function seuNome(nome){
    console.log("Meu nome é " +nome);
}

seuNome("jOAO");
seuNome("MAria");

function somar(a,b){
    var soma = a + b;
    console.log("Resultado da soma: " +a+"+"+b+"="+soma);
    return soma;
}

//Chamando o método diretamente
somar(10,4);

//armazando e mostrado o resultado da chamada em uma variavel(não tem tipo)
var resultado = somar(3,4);
console.log(resultado)
