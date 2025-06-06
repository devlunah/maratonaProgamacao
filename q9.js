numeros = [10, 20, 30, 40];
let valores = numeros.values();
let soma = 0

for (let value of valores){
    soma = soma + value;
}

console.log(soma);