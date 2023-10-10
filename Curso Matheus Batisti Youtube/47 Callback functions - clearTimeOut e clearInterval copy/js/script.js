//setTimeOut e  clearTimeout
//Essa função, mesmo que eu não chame ela, pelo fato de ser
//assincrona, ela vai executar
var x = 0;

var meuTimer = setTimeout(function() {
    console.log("O x é 0");
}, 2000);

x=5;

if(x>0){
    clearTimeout(meuTimer);
    console.log("O x passou de 0");
}

//setInterval e clearInterval
//Criei um intervalo a ser executado a cada 2 segundos
//Criei um setTime out que a cada 10 segundos executa o clearInterval limpando
//o intervalo que criei
var meuIntervalo = setInterval(function() {
    console.log("O y é 0");
}, 2000);

setTimeout(function(){
    console.log('Não precisando mais executar interval');
    clearInterval(meuIntervalo);
}, 10000)