//Tipos de dados -  Objeto
//Objetos são compostos por Chave e valor

//sintaxe objeto: var obj = {}
var obj = {
    nome: "Joao",
    idade: 32,
    profissao: "Analista de teste"
}

console.log(typeof obj)

//Imprime o objeto completo na tela
console.log(obj)

//Acessa uma propriedade do objeto
console.log(obj.nome)
console.log(obj.idade)
console.log(obj.profissao)

//alterando a propriedade de um objeto
obj.nome = "Marcos";
console.log(obj.nome);

//adicionando uma nova propriedade ao objeto original
obj.graduacao = "Tecnologia da informação";
console.log(obj);