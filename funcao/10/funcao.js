//10 - Crie uma função que recebe um array de números e usa um loop foreach para criar um novo array apenas com os números positivos.

function filtrarNumerosPositivos(numeros) {
    // Inicializa um array vazio para armazenar os números positivos
    let positivos = [];
  
    // Usa o método forEach para iterar sobre cada número no array
    numeros.forEach(function(numero) {
      // Verifica se o número é positivo
      if (numero > 0) {
        // Adiciona o número positivo ao array positivos
        positivos.push(numero);
      }
    });
  
    // Retorna o array com os números positivos
    return positivos;
  }
  
  // Exemplo de uso
  const numeros = [-5, 3, 0, -2, 7, -1, 4];
  const positivos = filtrarNumerosPositivos(numeros);
  console.log(positivos); // Saída: [3, 7, 4]
  