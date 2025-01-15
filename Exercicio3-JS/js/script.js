/* Iniciando uma calculadora de JS, primeiro criei um prompt para que o 
úsuario digite um número que corresponde a cada opção na lista.*/

let option = prompt(
    "Bem-vindo à Calculadora JS!\nEscolha a operação que deseja realizar:\n" +
    "1. Soma\n" +
    "2. Subtração\n" +
    "3. Multiplicação\n" +
    "4. Divisão\n" +
    "5. Encerrar programa"
).toLowerCase();

// Verifica se o usuário escolheu encerrar o programa
/* caso a variavel option seja exatamente igual a 5, o programa e
finalizado, e usado o bloco IF ELSE para verificar se o usuario vai
continuar, caso ele continue e escolha um tipo de operação, o else
e executado.*/
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
        //Variavel para armazenar o resultado da operação
        let result;

        // Determina a operação com base na escolha do usuário

        // Iniciando o switch:
        switch (option) {
            /* case da soma, se o usuario digitar a string 1, essa
            operação e realizada, no caso a variavel result vai ser reatribuida, o result vai
            ser uma soma entre o número 1 e o número 2, e em seguida exibir a variavel result
            já reatribuida. */
            case "1":
                result = number1 + number2;
                alert("Resultado da soma: " + result);
                break;
            
            /* case para a subtração. */
            case "2":
                result = number1 - number2;
                alert("Resultado da subtração: " + result);
                break;

            /* case para a multiplicação. */
            case "3":
                result = number1 * number2;
                alert("Resultado da multiplicação: " + result);
                break;

            /* case para a divisão, nesse caso acontece uma verificação, quando o usuario tenta
            dividir algum número por 0 aparece uma mensagem, caso o usuario não digite 0, a
            operação e feita normalmente. */
            case "4":
                if (number2 === 0) {
                    alert("Erro: divisão por zero não é permitida.");
                } else {
                    result = number1 / number2;
                    alert("Resultado da divisão: " + result);
                }
                break;

            // E por fim, caso o usuario não digite nenhum dos tipos de operações, esse alerta aparecera.
            default:
                alert("Por favor, selecione uma opção válida (1 a 5).");
                break;
        }
    }
}
