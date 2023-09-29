var teste = 5;

//Objeto global Window. É Chamado pelo this
console.log(this);
console.log(teste);

//Variavel idade global
var idade = 30;

let pessoa = {
    nome : "Joao",
    //Variavel idade local
    idade: 32,
    falar: function(){
        console.log("Bem vindo");
    },

    dizerNome: function(){
        console.log("Bem vindo "+this.nome);
        console.log("Sua idade é escopo global: "+idade);
        console.log("Sua idade é escopo local com this:"+this.idade);
    }
}

pessoa.dizerNome();

//Para criar uma função dentro do objeto em JS, basta adicionar o: 
//1- "nome da função" 
//2- "Dois pontos" ":"
//3- Iniciar a funcao "function(){}" 