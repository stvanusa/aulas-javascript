let peso = parseFloat(prompt("Digite o peso do pacote em kg"));

function calcularFrete(peso) {
    if (peso < 5) {
        alert("Frete R$ 10,00");

    } else if (peso >=5 && peso < 10) {
        alert("Frete R$ 20,00");

    } else {
        alert("Frete R$ 30,00");
    }
}
console.log(calcularFrete(peso))

