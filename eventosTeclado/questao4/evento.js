//04
const inputField = document.getElementById('inputField');

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é Enter
        event.preventDefault(); // Previne a ação padrão da tecla Enter
        alert('A tecla Enter foi pressionada e sua ação padrão foi prevenida.');
    }
});