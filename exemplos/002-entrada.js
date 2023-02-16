//fazendo referencia para biblioteca de entrada de dados
let entrada = require("prompt-sync")();

let nome = entrada("Digite seu nome! ");

console.log ("Nome digitado "+ nome);
console.log ("--------------------")

//trabalhando com números do jeito errado
//let n1 = entrada("Digite o 1º número: ");
//let n2 = entrada("Digite o 2º número: ");

//trabalhando com números do jeito certo
let n1 = parseInt (entrada("Digite o 1º número: "));
let n2 = parseInt (entrada("Digite o 2º número: "));

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

console.log("Resultado da soma entre " + n1 + " e " + n2 + " = " + soma);
console.log("Resultado da subtração entre " + n1 + " e " + n2 + " = " + subtracao);
console.log("Resultado da multiplicação entre " + n1 + " e " + n2 + " = " + multiplicacao);
console.log("Resultado da divisão entre " + n1 + " e " + n2 + " = " + divisao);

console.log("");
entrada("Pressione ENTER para encerrar...")