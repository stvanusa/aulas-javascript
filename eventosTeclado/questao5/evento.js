//05
document.addEventListener('keydown', (event) => {
    const output = document.getElementById('mostrarTecla');
    output.textContent = `Tecla pressionada é: ${event.key}`;
});