let precos = [100,200,500,400,600,800]
let novosPrecos = []

precos.forEach(precosAtual => {
    let desconto = precosAtual * 0.10
    novosPrecos.push(precosAtual - desconto)
    
})
console.log(novosPrecos)