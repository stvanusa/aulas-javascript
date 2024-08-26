//05
document.addEventListener('keydown', (event) => {
    const output = document.getElementById('output');
    output.textContent = `Tecla pressionada: ${event.key}`;
});