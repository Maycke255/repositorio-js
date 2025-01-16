/* Visitando Novas Cidades
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando 
se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do 
turista, quantas e quais cidades ele visitou. */

/* Primeiro defini 2 váriaveis, 1 para pedir o nome do turista e outra para ele responder
sim ou não. */
let name = prompt("Bem vindo ao loop. Qual o seu nome?");
let visit = prompt("Você visitou alguma cidade nas suas férias? (sim/não)").toLowerCase();

/* em seguida, defini mais duas varíaveis de armazenamento, uma delas para armazenar as
cidades digitadas em formato de string, e a outra para armazenar a quantidade de cidades
visitadas que começa em zero. */
let visitedCities = "";
let cityCount = 0;

/* Aqui começa o loop, caso o usuario digite a string "sim", dentro da varíavel visit que
foi perguntada no começo o loop vai ser executado. O loop inicia com com a criação de uma
nova varíavel, a varíavel city vai ser responsavel por armazenar as cidades visitadas, 
em seguida essa varivel e somada com outra variavel e reatribuida para a variavel visitedCities,
e é incluida com uma string de virgula e espaço para separar as cidades, e a variavel
cityCount e aumentada 1 mumero, o "++" aumenta 1 numero na contagem cada vez que o usuario 
digitar uma cidade. Em seguida a variavel visit e reatribuida mais uma vez, ou seja, não criei
outra variavel do zero, apenas reatribui uma já existe para pegar um novo valor, se o valor 
que o usuario digitou nessa variavel for "sim" o codigo continuara, caso sejá "não" o codigo
sera finalizado. */
while (visit === "sim") {
    let city = prompt("Qual cidade você visitou?");
    visitedCities += city + ", ";
    cityCount++;

    visit = prompt("Você visitou mais alguma cidade nas suas férias? (sim/não)").toLowerCase();
}

/* verificação para exibição do alert, o alert das cidades so vai ser exibido caso a contagem
da variavel cityCount aumentou, afinal ela começa em 0, caso tenha aumentado pelo menos 1, esse
bloco e executado. Nesse código ultilizei algo que o chat me informou que eu ainda não conhecia
o slice: O método .slice() é usado para extrair partes de uma string. Ele retorna um novo pedaço
da string, sem modificar a original / início: A posição inicial (baseada em zero) para começar a extração.
fim: Opcional. A posição até onde a extração vai, não incluindo esta posição. Se for negativo, conta a
partir do final da string / Por que usamos .slice(0, -2)?
0: O 0 indica que queremos começar a extração desde o início da string.
-2: Um número negativo conta de trás para frente. O -2 indica que queremos parar antes dos 
últimos 2 caracteres. Caso a variavel cityCount seja false, no caso seja igual ou menor que
0, o else e executado */
if (cityCount > 0) {
    alert("Turista: " + name + "\n" +
        "Você visitou " + cityCount + " cidades nas suas férias, que foram: \n" +
        visitedCities.slice(0, -2)
    )
} else {
    alert("Turista: " + name + " não visitou nenhuma cidade nas suas férias.")
}

