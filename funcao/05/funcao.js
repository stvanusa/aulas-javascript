//05-Crie uma função que receba um número e retorne a tabela de multiplicação desse número até 10.
function tabelaMultiplicacao(numero) {
  // Inicializa uma variável para armazenar o resultado
  let resultado = "";

  // Loop de 1 até 10
  for (let i = 1; i <= 10; i++) {
    // Adiciona a linha atual da tabela ao resultado
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  // Retorna o resultado final
  return resultado;
}

// Exemplo de uso
const numero = 2;
const tabela = tabelaMultiplicacao(numero);
console.log(tabela);
