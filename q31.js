let numeros = [8, 3, 10, 1, 4, 7];
let menor = numeros[0];
let maior = numeros[0];

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] > maior){
        maior = numeros[i];

    }else if (numeros[i] < menor){
       menor = numeros[i];
    }
}

console.log(`Menor: ${menor} \n Maior: ${maior}`);
