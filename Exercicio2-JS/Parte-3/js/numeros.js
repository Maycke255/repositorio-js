// 2. Faça um script que pede duas notas de um aluno.
// Em seguida, ele deve calcular a média do aluno e dar o seguinte resultado:
// - "Aprovado", se a média for maior ou igual a sete;
// - "Reprovado", se a média for menor do que sete;
// - "Aprovado com Distinção", se a média for igual a dez.

const nota1 = parseFloat(prompt("Digite a primeira nota do aluno (0 a 10):"));
const nota2 = parseFloat(prompt("Digite a segunda nota do aluno (0 a 10):"));

// Verificar se as entradas são válidas
if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    alert("Por favor, insira notas válidas entre 0 e 10.");
} else {
    // Calcular a média
    const media = (nota1 + nota2) / 2;

    // Verificar o resultado com base na média
    if (media === 10) {
        alert("Parabéns, você foi aprovado com distinção!");
    } else if (media >= 7) {
        alert("Parabéns, você foi aprovado!");
    } else {
        alert("Você foi reprovado, vai precisar ficar de recuperação.");
    }
}
