//8 - Crie uma função que recebe um array de números e usa um loop foreach para encontrar o maior número no array.

function encontrarMaiorNumero(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
      return null; // Retorna null se o array estiver vazio
    }
  
    // Inicializa a variável maiorNumero com o primeiro número do array
    let maiorNumero = numeros[0];
  
    // Usa o método forEach para iterar sobre cada número no array
    numeros.forEach(function(numero) {
      // Atualiza maiorNumero se o número atual for maior
      if (numero > maiorNumero) {
        maiorNumero = numero;
      }
    });
  
    // Retorna o maior número encontrado
    return maiorNumero;
  }
  
  // Exemplo de uso
  const numeros = [3, 5, 7, 2, 8, 6];
  const maior = encontrarMaiorNumero(numeros);
  console.log(maior); // Saída: 8
  