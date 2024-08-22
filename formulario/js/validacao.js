$(document).ready(function() {
    $("#form_cadastro_pessoa").submit(function(event){
    let nome = $("nome").val();//jquery
    if(nome ==''){
        alert('Campo Home Obrigatorio')
        event.preventDefaut();
    }
});
});

function test(){
    
}