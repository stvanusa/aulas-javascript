
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        // Exibir o código da tecla pressionada
        alert('Código da tecla: ' + event.code + '\nNúmero da tecla: ' + event.keyCode);
    });
});