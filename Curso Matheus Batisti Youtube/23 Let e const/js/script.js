//Variaveis let e const

//let
//Consigo usar variaveis locais(dentro de escopo local) com o mesmo
//nome de escopo global. As variaveis entendem quando estão fora e 
//dentro de algum escopo
//const
//Variavel constante, não pode ser alterado.As variaveis entendem 
//quando estão fora e dentro de algum escopo

//let-----------------
let x = 5 // var x = 5
x = 12;
console.log("Global "+x);

if(true){
    let x = 3
    console.log("Local "+x)
}

console.log("Global "+x);

//-----------------

//const-----------
const y = 10;
y = 12; // gera um erro no log
//---------------
