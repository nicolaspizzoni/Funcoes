//Função em JS é First-Class Object (Citizens)
//High-order function

//Criando função de forma literal
function func1(){}

//Armazenar funcao em uma variavel
const fun2 = function(){} //uma variavel recebendo uma funcao anonima

//Armazenar em um array
const array = [function(a,b){return a+b}, func1, fun2]
console.log(array[0](2,5))

//Armazenando como atributo de objeto
const obj = {}
obj.falar = function(){return 'Olá Mundo'}
console.log(obj.falar)
console.log(obj.falar())

//Passando uma função como parametro de outra
function run(fun){
    fun()
}
run(function(){console.log('Executando....')}) //traz para dentro do parametro fun a função posta como parametro, transformando fun em uma função

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function (c,d){
        console.log(a + b + c + d)
    }
}
soma(3,5)(5, 9) //como ao chamar soma() ela retorna uma função que espera receber um parametro tambem, ja inseresse o parametro a frente da chamada de soma soma()()

const oitoMais = soma(3,5)

oitoMais(2, 3)