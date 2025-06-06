let numeros = [3, 1, 2, 3, 2, 1, 1, 3, 3, 3];
let quant = {};

for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];
    console.log(num);

    if(quant[num]){
     quant[num]++;

    }else{
     quant[num] = 1;
    }
    
}

console.log(quant);