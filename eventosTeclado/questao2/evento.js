campoDeTexto = document.getElementById('meuCampoDeTexto');
campoDeTexto.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Tecla Enter pressionada!');
    }
});