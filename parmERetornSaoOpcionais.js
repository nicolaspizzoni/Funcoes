const area = function(largura, altura){
    const area = largura * altura
    if(largura >8 && altura >9 ){
        console.log(`Erro pois: lagura = ${largura} e altura = ${altura}`)
    }else{
        return area
    }
}
console.log(area(8, 4))
console.log(area(8, 6))
console.log(area(9, 10))

