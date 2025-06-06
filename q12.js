let frase = "a maratona é divertida e a maratona é incrível";
let fraseArray = frase.split(" ");
let contagemPalavras = {};

for(let i = 0; i < fraseArray.length; i++){
    let palavras = fraseArray[i];

    if(contagemPalavras[palavras]){
     contagemPalavras[palavras]++;

    }else{
     contagemPalavras[palavras] = 1;
    }
}

console.log(contagemPalavras);