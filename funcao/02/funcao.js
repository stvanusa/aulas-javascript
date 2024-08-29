//2 - Crie uma função que receba um número e retorne se ele é par ou ímpar.
function parOuImpar(numero) {
    if (numero % 2 === 0) { //
        return 'Par';
    } else {
        return 'Ímpar';
    }
}
var resultado = parOuImpar(10);
console.log(resultado); 