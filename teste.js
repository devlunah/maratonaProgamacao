let str = "radar";
let palavra = []

for (let i = 0; i < str.length; i++) {

    let strLetras = str.slice(i, i + 1);
    let strLetrasOpostas = str.at(-1 - i);
    console.log(strLetrasOpostas);

    if(strLetras == strLetrasOpostas){
        palavra.push(strLetras);
    }
}

console.log(palavra);

if(palavra == str){
    console.log("É palindromo");
}else{
    console.log("Não é palindromo");
}