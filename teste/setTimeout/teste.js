document.addEventListener('DOMContentLoaded', function () {
    // Função que será chamada após o atraso
    function showAlert() {
        alert('3 segundos se passaram!');
    }

    // Adiciona um ouvinte de evento para o botão
    document.getElementById('myButton').addEventListener('click', function () {
        // Executa a função showAlert após 3 segundos
        setTimeout(showAlert, 3000); // 3000 milissegundos = 3 segundos
    });
});

