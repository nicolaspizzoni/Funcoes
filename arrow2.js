//Aula 73

let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)//this = global

const obj={}
comparaComThis = comparaComThis.bind(obj)
//comparaComThis.bind(obj)(obj)
comparaComThis(obj)

//Com Arrow

let comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(global)//false
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
//com uma arrow o this nao fica preso a global e sim no bloco e contexto em que foi definida