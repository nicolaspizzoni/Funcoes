//Aula 76 - Funções anonimas

const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))//como é atribuido a operacao uma funcao ela se torna uma funcao e recebe parametros por isso a e b foram declarados
}

imprimirResultado(5, 7)

imprimirResultado(3, 2, function(x,y){//passada outra funcao como parametro para ser atribuida em operacao
    return x * y
})

imprimirResultado(6, 2, (c, d) => c - d)