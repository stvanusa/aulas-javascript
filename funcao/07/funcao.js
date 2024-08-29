//7 - Crie uma função que recebe um array de números e usa um loop foreach 
//para imprimir "Par" se o número for par e "Ímpar" se o número for ímpar.

function imprimirParidade(numeros) {
    // Usa o método forEach para iterar sobre cada número no array
    numeros.forEach(function(numero) {
      // Verifica se o número é par ou ímpar
      if (numero % 2 === 0) {
        console.log(`${numero} é Par`);
      } else {
        console.log(`${numero} é Ímpar`);
      }
    });
  }
  
  // Exemplo de uso
  const numeros = [1, 2, 3, 4, 5, 6];
  imprimirParidade(numeros);