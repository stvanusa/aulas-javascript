/*function exibirTextoComAtraso() {
    const texto = "Texto exibido após 5 segundos!";
    const div = document.getElementById('meuDiv');
    
    setTimeout(function() {
        // Atualiza o conteúdo da <div> com o texto
        div.textContent = texto;
    }, 5000); 
}

exibirTextoComAtraso();

*/

setTimeout (()=>{
let  div = document.getElementById('meuDiv')
div.textContent = "Hoje o Hícaro é capeão"

},5000)