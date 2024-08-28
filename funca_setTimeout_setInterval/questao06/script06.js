// Função que será executada
function minhaFuncao() {
    const output = document.getElementById('output');
    const timestamp = new Date().toLocaleTimeString();
    output.textContent = `Função executada em: ${timestamp}`;
}

// Executa a função imediatamente
minhaFuncao();

// Executa a função a cada 6 segundos
setInterval(minhaFuncao, 6000);