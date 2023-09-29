//Tipos de dados -  Arrays
//Arrays são considerados objetos em JS

//Arrays são identificados por lista
//com ID (índices)

//sintaxe array: var arr = []

//Array com varios tipos de dados
var arr = [32,"Joao",true,
    {
        carro:"nao"
    }
]

//mostra todo o array
console.log(arr)


//Array com um unico tipo(melhor organizado)
var numeros = [1,2,3,4,5];
console.log(numeros);

//Acessando um elemento
console.log(arr[0]);
console.log(numeros[3]);

//adicionar elemento(na posicao 4 que nao existe)
arr[4] = 10;
console.log(arr)

//alterar elemento(na posicao 0 que já existe)
arr[0] = 45;
console.log(arr)