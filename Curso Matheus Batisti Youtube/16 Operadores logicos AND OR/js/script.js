//Operadores lógicos
// && (And) Verifica se duas ou mais condições são verdadeiras
// || (Or) Verifica uma ou outra condição é verdadeiras

var idade = 18;
var nome = "João";

if (idade >= 18 && nome == "João") {
    console.log("Pode acessar o prédio");
}

if (idade >= 20 || nome == "João") {
    console.log("Pode acessar o prédio");
}

if((nome == "Pedro" && 15>20) || 10 == 10){
    console.log("Pode acessar o prédio");
}