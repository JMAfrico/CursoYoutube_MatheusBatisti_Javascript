const objs = [
    {
        nome:"João",
        idade: 32,
        esta_trabalhando: true,
        hobbies: ['violao','games'],
        detalhes_profissao:{
            profissao:'Tester',
            empresa:'Accenture'
        },
        endereco:{
            rua:'SSão Paulo',
            cidade:'SP'
        }
    },
    
    {
        nome:"Marcos",
        idade: 33,
        esta_trabalhando: false,
        hobbies: ['praia','jogos'],
        detalhes_profissao:{
            profissao:null,
            empresa:null
        },
        endereco:{
            rua:'RRios',
            cidade:'RJ'
        }
    }
]
console.log(objs)

//Converter objeto para JSON(Simulando enviando pra API)
const jsonData = JSON.stringify(objs);
console.log(jsonData)


//Converter JSON para objeto(Simulando recebendo dados de API)
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) =>{
    console.log(pessoa.nome);
})