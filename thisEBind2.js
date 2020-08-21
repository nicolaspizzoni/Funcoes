//AULA 70

function Pessoa(){
    this.idade = 0
    const self = this //variavel this atribuida a constante self, o que permite chamar a funcao e manter o this preso a ela
    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    }/*.bind(this) = amarra o this a função, como esta dentro da function
         o this se refere ao this da function Pessoa*/, 2000)
}
new Pessoa