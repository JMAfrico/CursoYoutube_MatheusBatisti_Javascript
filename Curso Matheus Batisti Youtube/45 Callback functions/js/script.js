//Callback - Após acontecer um retorno, é executada uma ação
//Permite executar uma função depois de uma determina ação
//Conceito fundamental para entender a parte assíncrona do JS

//comum
function soma(a,b){
    var op = a+b;
    console.log(op);
}

function multiplicacao(a,b){
    var op = a*b;
    console.log(op);
}

soma(2,5);
multiplicacao(2,3);

//com callback

function exibir(num){
    console.log("A operação resultou em:" + num);
}

function isPar(num){
    if(num % 2 == 0){
    console.log("O número:" + num + " é par");
    }else{
        console.log("O número:" + num + " é impar");
    }
}

//o callback é adicionado como argumento
//depois ele armazena o resultado da operacao
//e quando formos utilizar a resposta, chamamos o método pra executar
//o que queremos
function somar(a,b, callback){
    var op = a+b;
    callback(op);
}

function multiplicacaor(a,b,callback){
    var op = a*b;
    callback(op);
}

somar(2,5,exibir);
multiplicacaor(2,3,exibir);

somar(2,5,isPar);
multiplicacaor(2,3,isPar);