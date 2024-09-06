var contagem = document.getElementById("contagem");
var btn = document.getElementById("incrementar");

var contador = 0;
function atualizarContagem() {
  contador++;
  contagem.textContent = contador;
}

setInterval(atualizarContagem, 3000);
