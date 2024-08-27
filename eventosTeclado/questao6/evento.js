document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            alert('A tecla Esc foi pressionada!');
        }
    });
});
