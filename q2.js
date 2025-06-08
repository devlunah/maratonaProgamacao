let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];
let quant = 4

 for(i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0 && numerosPares.length < quant){
      numerosPares.push(numeros[i]);
    }
 }

let soma = 0;

for (let value of numerosPares){
    soma = soma + value;
}

console.log(numerosPares);
console.log(soma);
