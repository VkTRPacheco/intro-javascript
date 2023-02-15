// comentário de 1 linha
console.log('Hello World!');
/*
    comentário de mais 
    de uma linha
*/

/*
    Pesquisar a diferença entre as intruções
    var, let e const na linguagem java-script
*/

let nome = "Victor";
let idade = 32;
let altura = 1.81;
let trabalha = true;
let corFavorita = "verde";
let cores_favoritas = ["verde", "roxo", "laranja", "azul"];
let endereco = {
    "logradouro"    : "Rua",
    "nome_log"      : "Brasil",
    "n"             : "105 A",
    "bairro"        : "centro"
};
let covid;
let dengue = null;
const exfunc = () => 10;

console.log("Variavel nome = " + typeof(nome));
console.log("Variavel idade = " + typeof(idade));
console.log("Variavel altura = " + typeof(altura));
console.log("Variavel trabalha = " + typeof(trabalha));
console.log("Variavel corFavorita = " + typeof(corFavorita));
console.log("Variavel cores_favoritas = " + typeof(cores_favoritas));
console.log("Variavel endereco = " + typeof(endereco));
console.log("Variavel covid = " + typeof(covid));
console.log("Variavel dengue = " + typeof(dengue));
console.log("Variavel exfunc = " + typeof(exfunc));
