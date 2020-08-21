//Aula 75 - Call back
//Call back é chamar uma função dependendo da ocorrência de um evento

const fabricantes = ["Mercedes", "BMW", "Porche"]

function imprimir(n, i, t, nada)/*primeiro puxa o valor e depois o indice depois todos e por fim nada*/{
    console.log(n, i+1, t, nada)
}

function imprimir2(nome, indice, todos, nada){
    console.log(`${indice + 1} ${nome} todos: ${todos} nada: ${nada}`)
}

fabricantes.forEach(imprimir)//forEach é o evento que tras o callback da funcao imprimir

fabricantes.forEach(imprimir2)

fabricantes.forEach((fab, teste) => console.log(fab, teste))