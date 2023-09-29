let pessoa = {
    nome : "Joao",
    idade: 32,
    falar: function(){
        console.log("Bem vindo");
    },
    soma: function(a,b){
        res = a + b;
        console.log(res);
        return res;       
    }
}

pessoa.falar();
pessoa.soma(5,4);
