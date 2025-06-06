let numeros = [4, 5, 6, 4, 5, 7];
let quant = [];

for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];
    console.log(num);

    if(!quant.includes(num)){
        quant.push(num);
    }else{
        //nada
    }
}

console.log(quant);
