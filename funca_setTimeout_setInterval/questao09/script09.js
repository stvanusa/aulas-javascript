function exibirMensagem() {
  console.log("Mensagem exibida a cada 2 segundos");
}

// Função para iniciar o intervalo após 3 segundos
function iniciarIntervalo() {
  // Inicia o intervalo que exibe a mensagem a cada 2 segundos
  const intervalo = setInterval(exibirMensagem, 2000);
  // Opcional: Se desejar parar o intervalo após um certo tempo, adicione um timeout aqui
  // setTimeout(() => {
  //     clearInterval(intervalo);
  //     console.log('Intervalo parado');
  // }, 10000); // Por exemplo, parar o intervalo após 10 segundos
}

// Configura o atraso de 3 segundos antes de iniciar o intervalo
setTimeout(iniciarIntervalo, 3000);
