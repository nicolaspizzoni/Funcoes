//AULA 69 - "this" e a função bind

const pessoa = {
    nome: "Nicolas",
    falar(){
        console.log(this.nome) //acessando o atributo do obejeto pessoa com o this
    }
}
pessoa.falar()


const falar1 = pessoa.falar //armazenando o atributo a uma constante
falar1() /*undefined pois o atributo nome esta apontando para o this do objeto/funcao ao qual foi atribuido, falar1,
             que nao possui dentro dele uma definição do atributo nome*/ //conflito entre paradigmais: funcional e OO
console.log(typeof falar1)

const falar2 = pessoa.falar.bind(pessoa) /*associada a funcao falar tem a funcao bind, que permite passar um objeto 
                                            onde voce queira que seja resolvido o this. Amarra o metodo ao objeto escolhido*/

falar2() //this esta apontando para o objeto certo

const falar3 = pessoa.falar.bind(pessoa)
falar3()