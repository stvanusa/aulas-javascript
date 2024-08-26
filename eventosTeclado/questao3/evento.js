campoDeTexto = document.getElementById('meuCampoDeTexto');
        campoDeTexto.addEventListener('keydown', function(event) {
            if (event.shiftKey) {
                console.log('Tecla Shift está pressionada junto com a tecla:', event.key);
            } else {
                console.log('Tecla Shift não está pressionada. Tecla pressionada:', event.key);
            }
        });