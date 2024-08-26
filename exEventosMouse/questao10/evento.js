//10
const Div = document.getElementById('Div');
const positionDisplay = document.getElementById('position');

Div.addEventListener('mousemove', function(event) {
    // Obtém as coordenadas do mouse dentro da div
    const rect = Div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Atualiza o texto com a posição do cursor
    positionDisplay.textContent = `Posição: x: ${x}, y: ${y}`;
});