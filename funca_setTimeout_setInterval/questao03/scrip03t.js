
function exibirMensagem() {
    console.log('Mensagem exibida!');
}

const intervalo = setInterval(exibirMensagem, 3000);

// Configura o timeout para parar o intervalo após 10 segundos
setTimeout(() => {
    clearInterval(intervalo);
    console.log('Intervalo parado!');
}, 10000)