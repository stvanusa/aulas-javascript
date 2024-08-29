//3 - Crie uma função que receba três números e retorne o maior deles.
function maiorDeTres(num1, num2, num3) {
    // Compara os números e retorna o maior
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
var resultado = maiorDeTres(5, 8, 3);
console.log(resultado);

//solução usando math.max
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }
  
  // Exemplo de uso
  const num1 = 5;
  const num2 = 10;
  const num3 = 7;
  const maior = maiorNumero(num1, num2, num3);
  console.log(maior); // Saída: 10
