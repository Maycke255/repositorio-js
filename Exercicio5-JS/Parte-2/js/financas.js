/* Controle Financeiro
Escreva um programa em javascript que comece perguntando pela quantidade inicial de 
dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de 
adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro 
o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a 
quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair 
deve encerrar o programa. */

let youMoney = parseFloat(prompt("Qual e a sua quantidade atual de dinheiro?"));
let menu;

do {
    menu = parseFloat(prompt("Seu dinheiro atual: R$ " + youMoney + "\n" +
        "O que você deseja fazer com o seu dinheiro atual? (Selecione uma opção/número de 1 a 3.)\n" +
        "\n1. Adicionar mais dinheiro.\n" +
        "2. Remover algum dinheiro.\n" +
        "3. Sair."
    ));

    if (isNaN(youMoney) || (isNaN(menu))) {
        alert("Por favor, coloque um número válido")
    } else {
        switch (menu) {
            case 1:
                let more = parseFloat(prompt("Quanto de dinheiro você deseja adicionar?"))
                youMoney += more
                alert("R$ " + more + " foi adicionado a sua conta.")
                break;
    
            case 2:
                let remove = parseFloat(prompt("Quanto de dinheiro você deseja retirar?"))
                youMoney -= remove
                alert("R$ " + remove + " foi retirado da sua conta.")
                break;
    
            case 3:
                alert("Você escolheu sair do programa, encerrando...")
                break;
        
            default:
                alert("Por favor, escolha um número de 1 a 3.")
                break;
        }
    }

} while (menu !== 3);
