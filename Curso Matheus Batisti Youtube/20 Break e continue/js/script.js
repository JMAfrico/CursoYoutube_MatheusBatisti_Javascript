//Break e continue
// Muito utilizados em looping
// Com Break podemos encerrar uma instrução, sai do looping
// Com continue podemos pular uma instrução, pula somente aquela instrução

//Break - Sai do looping
var x;
for(x = 0 ; x <= 10; x++){
    console.log(x);
    if(x == 6){
        break;
    }
}

//Continue - Pula somente a instrução
var y;
for(y = 0 ; y <= 10; y++){
    if(y == 6){
        continue;
    }
    console.log(y);
}
