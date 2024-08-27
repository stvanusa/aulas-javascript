
document.addEventListener('DOMContentLoaded', function () {
    // Função para lidar com o evento de tecla
    function handleKeydown(event) {
        console.log('Tecla pressionada:', event.key);
    }

    // Adiciona o ouvinte de eventos ao document
    document.addEventListener('keydown', handleKeydown);
});
