const mensagem = ['mensagem1',' mensagem2', 'mensagem3','mensagem4']
Math.floor(5,4)
function atualizarmensagem(){
    let div = document.getElementById('mensagem')
    let index = Math.floor(Math.random() * mensagem.length)
    div.textContent = mensagens[index]

}

setInterval(atualizarmensagem,4000)