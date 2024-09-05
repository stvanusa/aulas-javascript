let nota = parseFloat(prompt("Digite sua nota"));

if (nota >= 6) {
    alert('Aprovado');
} else if (nota < 4) {
    alert('Reprovado');
} else if (nota >= 4 && nota < 6) {
    alert('Recuperação');
}


