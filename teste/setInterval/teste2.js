document.addEventListener('DOMContentLoaded', function() {
            // Inicializa o contador
            let counter = 0;

            // Atualiza o contador a cada 1 segundo (1000 milissegundos)
            const intervalId = setInterval(function() {
                // Incrementa o contador
                counter++;

                // Atualiza o texto exibido
                document.getElementById('counterDisplay').textContent = 'Contador: ' + counter;
            }, 1000); // 1000 milissegundos = 1 segundo

            // Exemplo de como parar o contador após 10 segundos
            setTimeout(function() {
                clearInterval(intervalId);
                document.getElementById('counterDisplay').textContent = 'Contador parado após 10 segundos.';
            }, 10000); // 10000 milissegundos = 10 segundos
        });