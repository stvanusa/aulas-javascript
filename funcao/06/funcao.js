// 6 - Crie uma função que receba um array de números e retorne a média desses números.

function calcularMedia(numeros) {
  // Verifica se o array está vazio
  if (numeros.length === 0) {
    return 0; // Retorna 0 para evitar divisão por zero
  }

  // Calcula a soma dos números no array
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  // Calcula a média dividindo a soma pelo número de elementos
  return soma / numeros.length;
}

// Exemplo de uso
const numeros = [10, 20, 30, 40, 50];
const media = calcularMedia(numeros);
console.log(media); // Saída: 30
