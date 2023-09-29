//Métodos do objeto: Number


//parseFloat transforma uma String para float ex: "10.00" para 10.00
console.log(typeof "12.99")
console.log(parseFloat("12.99"))
console.log(typeof parseFloat("12.99"))

//parseFloat transforma uma String para int ex: "10" para 10
console.log(typeof "12")
console.log(parseInt("12"))
console.log(typeof parseInt("12"))
console.log(parseInt("12.99"))

// toFixed limita as casas decimais de um numero
//Somente uma casa decimal, arredonda p/ cima ou baixo
console.log(23.99.toFixed(1))
console.log(23.12.toFixed(1))
console.log(23.54565.toFixed(1))

//Somente duas casa decimais
console.log(23.974717.toFixed(2))

// isNan , verifica se "não é um numero", retorna false ou true
console.log(isNaN("teste"))
console.log(isNaN(128))

//Valor maximo e Valor minino que o javascript suporta
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

