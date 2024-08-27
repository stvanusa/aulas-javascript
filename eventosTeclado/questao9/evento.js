document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o campo de entrada específico
    const inputField = document.getElementById('entrada');

    // Função para lidar com o evento de tecla
    function handleKeydown(event) {
        if (event.key === 'Backspace') {
            // Previne a ação padrão da tecla Backspace
            event.preventDefault();
            console.log('Tecla Backspace desativada.');
        }
    }

    // Adiciona o ouvinte de eventos ao campo de entrada
    inputField.addEventListener('keydown', handleKeydown);
});