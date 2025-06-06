let numeros = [-5, 3, -2, 0, 9, -1];
let numerosPositivos = [];

for(i = 0; i < numeros.length; i++){
    if (numeros[i] >= 0) {
        numerosPositivos.push(numeros[i]);
    }

}
console.log(numerosPositivos);