let numeros2 = [3,4,5,6,7,8,9,4]
let numerosBuscados = 4
let quantidadeVezesNumeroBuscado = 0

numeros2.forEach(elemento => {
    if(numerosBuscados == elemento){
        quantidadeVezesNumeroBuscado ++

    }

})
console.log(quantidadeVezesNumeroBuscado)