/* Robô da Tabuada
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número 
(de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar 
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma 
variável do tipo string. Depois o programa deve exibir esses resultados e finalizar. */

let number = parseInt(prompt("Qual número você deseja calcular?\n" +
    "O número sera multiplicado 1 ate 20."
))

let resultados = `Tabuada do número ${number}:\n`;

if (isNaN(number)) {
    alert("Por favor, digite um número valido.")
}else {
    for(let i = 0; i <= 20 ; i++ ){
    let resultado = result = number * i;
    resultados += `${number} * ${i} = ${resultado}\n`;
    }
}

alert(resultados);