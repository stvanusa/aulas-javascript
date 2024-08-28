// Função que exibe a primeira mensagem
function exibirMensagemInicial() {
  console.log("Esta é a mensagem inicial.");

  // Define um atraso de 8 segundos para a próxima mensagem
  setTimeout(exibirMensagemFinal, 8000);
}

// Função que exibe a segunda mensagem
function exibirMensagemFinal() {
  console.log("Esta é a mensagem final após 8 segundos.");
}

// Executa a função inicial
exibirMensagemInicial();
