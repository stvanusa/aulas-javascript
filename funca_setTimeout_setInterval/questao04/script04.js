
// Função que será chamada uma vez após 1 segundo
function mensagemInicial() {
    console.log('Mensagem inicial exibida após 1 segundo!');
}

// Função que será chamada a cada 4 segundos
function mensagemRepetida() {
    console.log('Mensagem exibida a cada 4 segundos!');
}

// Exibe a mensagem inicial uma única vez após 1 segundo
setTimeout(() => {
    mensagemInicial();

// Configura o intervalo para exibir a mensagem repetida a cada 4 segundos
    setInterval(mensagemRepetida, 4000);
}, 1000);




