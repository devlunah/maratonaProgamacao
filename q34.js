numeros = [7.5, 8.0, 6.0, 9.0, 7.0, 10.0];
//let valores = numeros.values();
let soma = 0

for (let value of numeros){
    soma = soma + value;
}

media = soma / numeros.length;

console.log(media.toFixed(2));