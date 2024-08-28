// Inicializa o contador
let segundos = 0;

// Função para atualizar o contador
function atualizarContador() {
    segundos++;
    document.getElementById('contador').textContent = segundos + ' segundos';
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);   