function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]  /*arguments é um array interno que toda função tem, quando nenhum parametro é passado esse array esta vazio
                            permite pegar todos os parametros passados apartir da chamada da função e utiliza-los dentro da mesma*/
    }
    return soma
}
console.log(soma()) //sem passar nenhum parametro ele nao entra no arguments
console.log(soma(1,3))
console.log(soma(1,3,4)) //soma = soma + arguments[i] = soma + arguments[i] = soma + arguments[i] => 0 + 1 = 1 + 3 = 4 + 4 = 8
console.log(soma('a', 4, 'g'))
console.log(soma('a', 'b','c'))
