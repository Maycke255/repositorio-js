let option = prompt(
    "Bem-vindo à Calculadora JS!\nEscolha a operação que deseja realizar:\n" +
    "1. Soma\n" +
    "2. Subtração\n" +
    "3. Multiplicação\n" +
    "4. Divisão\n" +
    "5. Encerrar programa"
).toLowerCase();

// Verifica se o usuário escolheu encerrar o programa
if (option === "5") {
    alert("Finalizando o programa...");
} else {
    // Solicita os números somente se a opção não for "5"
    let number1 = parseFloat(prompt("Digite o primeiro número:"));
    let number2 = parseFloat(prompt("Digite o segundo número:"));

    // Verifica se os números fornecidos são válidos
    if (isNaN(number1) || isNaN(number2)) {
        alert("Por favor, digite números válidos.");
    } else {
        let result;

        // Determina a operação com base na escolha do usuário
        switch (option) {
            case "1":
                result = number1 + number2;
                alert("Resultado da soma: " + result);
                break;

            case "2":
                result = number1 - number2;
                alert("Resultado da subtração: " + result);
                break;

            case "3":
                result = number1 * number2;
                alert("Resultado da multiplicação: " + result);
                break;

            case "4":
                if (number2 === 0) {
                    alert("Erro: divisão por zero não é permitida.");
                } else {
                    result = number1 / number2;
                    alert("Resultado da divisão: " + result);
                }
                break;

            default:
                alert("Por favor, selecione uma opção válida (1 a 5).");
                break;
        }
    }
}
