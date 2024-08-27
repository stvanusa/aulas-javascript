
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        // Verifica se a tecla Ctrl e a tecla S estão pressionadas simultaneamente
        if (event.ctrlKey && event.key === 's') {
            // Previne a ação padrão do Ctrl + S (geralmente salvar a página)
            event.preventDefault();

            // Executa a ação customizada
            alert('Ctrl + S foi pressionado!');

            // Aqui você pode adicionar qualquer outra ação desejada
        }
    });
});
