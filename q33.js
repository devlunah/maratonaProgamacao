let numeros = [5, 12, 7, 8, 3, 10, 9];
let numerosPares = [];

 for(i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
      numerosPares.push(numeros[i]);
    }
 }
 console.log(numerosPares);