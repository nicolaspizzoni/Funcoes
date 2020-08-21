function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)//this se mantem fixo ao bloco em que foi declarado quando é usado em arrow function
    }, 2000)
}

new Pessoa

