let str = "radar";
let strLetras = str.split("");
console.log(strLetras)

let palavra = [];

for (let i = 0; i < strLetras.length; i++){
    palavra.push(strLetras[i]);
}

palavra.reverse()
for (let i = 0; i < strLetras.length; i++){
    if(strLetras[i] === palavra[i]){
        palindromo = true

    }else{
        palindromo = false
    }
}

if(palindromo == true){
    console.log("É palindromo");
}else{
    console.log("Não é palindromo");
}
