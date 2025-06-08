let alunos = [
    {
    nome: "Maria",
    notas: [8, 9, 10]
    },
    {
    nome: "João",
    notas: [4, 5, 6]
    }]

let soma = 0

for (let value of alunos.notas){
    soma = soma + value;
}

media = soma / numeros.length

console.log(media)