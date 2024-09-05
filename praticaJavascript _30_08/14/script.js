/*function mostrarTecla(event) {
    document.getElementById('tecla').textContent = `Tecla pressionada: ${event.key}`;
}
window.onload = function() {
    document.addEventListener('keydown', mostrarTecla);
};*/

let paragrafo = document.getElementById('Tecla')
document.addEventListener('keypress', function (event){
let tecla = event.key
let conteudoParagrafo = paragrafo.textContent
paragrafo.textContent = conteudoParagrafo + tecla

})