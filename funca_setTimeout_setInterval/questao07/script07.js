// Contador de chamadas
let contagem = 0;

// Função que será chamada a cada 2 segundos
function minhaFuncao() {
  contagem++;
  document.getElementById(
    "contador"
  ).textContent = `Função chamada ${contagem} vez${contagem > 1 ? "es" : ""}`;

  // Para a execução após 10 chamadas
  if (contagem >= 10) {
    clearInterval(intervalo); // Para o intervalo
    document.getElementById("contador").textContent +=
      " - Parado após 10 chamadas";
  }
}

// Executa a função a cada 2 segundos
const intervalo = setInterval(minhaFuncao, 2000);
