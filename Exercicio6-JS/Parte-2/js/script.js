/* Procurando Palíndromos
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. 
Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma 
ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma 
mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, 
o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda. */

let palindromo = prompt("Qual palavra deseja identificar?");

let palavraInvertida = "";

for( let i = palindromo.length - 1 ; i >= 0; i-- ) {
    palavraInvertida += palindromo[i];
}

if (palindromo !== palavraInvertida) {
    alert(`A palavra ${palindromo} não e um palindromo. \n
        Palavra invertida: ${palavraInvertida}` )
} else{
    alert(`A palavra ${palindromo} e um palindromo.\n
    Palavra invertida: ${palavraInvertida}`)
}
