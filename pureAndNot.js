//NÃO PURA
var name = "Nicolas"//usa algo do estado global

function saudacao1 (){
    console.log("Ola!, me chamo "+name)
}

saudacao1()

//PURA, jeito funcional

function saudacao2 (nome){//nome é um argumento para função
    console.log("Olá!, me chamo "+ nome)
}

saudacao2("Nicolas")