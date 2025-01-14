/* Escreva um programa em javascript que permita inserir o nome 
e a velocidade de dois veículos e exiba na tela uma mensagem dizendo
qual dos dois é mais rápido (ou que as velocidades são iguais se
  este for o caso) */

//Criando as váriaveis:

let vehicle1 = prompt("Qual e o nome do primeiro veículo? ");
let vehicle2 = prompt("Qual e o nome do segundo veículo? ");

let speed1 = parseFloat(prompt("Qual a velocidade do primeiro veículo em km/h? "));
let speed2 = parseFloat(prompt("Qual a velocidade do segundo veículo em km/h? "));

//criando verificações para o usuario não digitar letras:

if (isNaN(speed1) || isNaN(speed2)) {
    alert("Por favor, digite apenas numeros para fazer a comparação.")
}else if (speed1 === speed2){
    alert("Ambos veiculos tem velocidades iguais!")
} else if (speed1 > speed2) {
    alert("O veículo " + vehicle1 + " e mais rapido que o veiculo " + vehicle2)
} else {
    alert("O veiculo " + vehicle2 + " e mais rapido que o veiculo " + vehicle1)
}