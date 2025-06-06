let nome = "Ana";
let notas = [7, 8, 9];
let soma = 0;

for (let value of notas){
    soma = soma + value;
}
media = soma / notas.length

let aluno = {
    "nome": nome,
    "média": media
};

console.log(aluno);
