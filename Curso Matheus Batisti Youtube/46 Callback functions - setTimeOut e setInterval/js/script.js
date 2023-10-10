//AQUI EXECUTAMOS ELA APÓS UM DETERMINADO
//CRITÉRIO, NESSE CASO TEMPO. POR ISSO
//ELA É UMA CALLBACK ASSINCRONA


//Callback - Após acontecer um retorno, é executada uma ação
//Permite executar uma função depois de uma determina ação
//Conceito fundamental para entender a parte assíncrona do JS
// setTimeOut e setInterval são executados após determinado tempo
//o callback é adicionado como argumento
//depois ele armazena o resultado da operacao
//e quando formos utilizar a resposta, chamamos o método pra executar
//o que queremos
//Uma função que é passada como parâmetro para outra é denominada callback

//Uma função que executa assincronamente.Passamos a função e o tempo
//em milisegundos por parâmetro. Assincrona pq só é executada na
//condição determinada, enquanto o restante do código é executado normalmente

//setTimeOut
//Após determinado tempo, será executado
//Passamos a função e o tempo em milisegundos por parâmetro
console.log("Antes do set timeout");
setTimeout(function() {
    console.log("testando o set timeout");
}, 2000);
console.log("Depois o set timeout");
//clearTimeOut

//setInterval
//De tempos em tempos será executado(igual um looping)
//Devemos determinar um ponto de parada a fim de interromper a execução
//Passamos a função e o tempo em milisegundos por parâmetro
setInterval(function() {
    console.log("testando o set inInterval");
}, 2000);
//clearInterval