quantNumeros = 3;
numeros = [2, 4, 6];
let valores = numeros.values();
let soma = 0

for (let value of valores){
    soma = soma + value;
    //console.log(soma);
}

media = soma / quantNumeros
console.log(media)
