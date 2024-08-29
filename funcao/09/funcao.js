//9 - Crie uma função que recebe um array de palavras e usa um loop foreach para contar quantas palavras têm mais de 4 letras.

function contarPalavrasLongas(palavras) {
    // Inicializa o contador
    let contador = 0;
  
    // Usa o método forEach para iterar sobre cada palavra no array
    palavras.forEach(function(palavra) {
      // Verifica se a palavra tem mais de 4 letras
      if (palavra.length > 4) {
        contador++;
      }
    });
  
    // Retorna o número de palavras com mais de 4 letras
    return contador;
  }
  
  // Exemplo de uso
  const palavras = ["sol", "lua", "programação", "teste", "javascript", "web"];
  const resultado = contarPalavrasLongas(palavras);
  console.log(resultado); // Saída: 3
  