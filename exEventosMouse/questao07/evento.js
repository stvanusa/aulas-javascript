//07
const button = document.getElementById('Button');

// Adiciona um ouvinte de evento para o duplo clique
button.addEventListener('dblclick', function() {
    this.textContent = 'Botão duplo clicado!';
});