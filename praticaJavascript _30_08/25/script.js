function parOuImpar(numero) {
  if (numero % 2 === 0) { //
      return 'Par';
  } else {
      return 'Ímpar';
  }
}
var resultado = parOuImpar(5);
console.log(resultado); 