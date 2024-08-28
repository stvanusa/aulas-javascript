// Função que será chamada a cada 4 segundos
function exibirMensagem() {
  console.log("Mensagem exibida a cada 4 segundos");
}

// Intervalo para exibir a mensagem a cada 4 segundos
const intervalo = setInterval(exibirMensagem, 4000);

// Para a execução após 15 segundos
setTimeout(() => {
  clearInterval(intervalo);
  console.log("Execução parada após 15 segundos");
}, 15000);
