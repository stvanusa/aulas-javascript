//09
const paragrafo = document.getElementById('meuParagrafo');
let clickedOnce = false; // Variável para rastrear o estado do clique

paragrafo.addEventListener('click', function() {
    if (!clickedOnce) {
        paragrafo.textContent = 'Você clicou aqui!';
        clickedOnce = true; // Atualiza o estado para o próximo clique
    } else {
        paragrafo.textContent = 'Clicado novamente!';
        clickedOnce = false; // Restaura o estado para o próximo clique
    }
});