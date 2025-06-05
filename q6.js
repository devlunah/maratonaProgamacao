// utilizar indexOf na string
// e lastIndexOf para comparar
// let str = "radar";

// for (i = 0; i < str.length; i++){
    
//     let str2 = str.slice(i, i + 1);
//     console.log(str2);

//     //console.log(str.valueOf())
//     //console.log(str.indexOf(str[i], i))

// }

let str = "radar";
let palindromo = true

for (let i = 0; i < str.length / 2; i++) {

    //let str2 = str.slice(i, i + 1);   

    if(str[i] !== str[str.length - 1 - i]){
        palindromo = false
        break
        // palavra = []
        // palavra.push(str[i])
        // console.log(palavra)
    }
        
    
}
if(palindromo){
    console.log(`${str} é palindromo`);
}else{
    console.log(`${str} não é palindromo`);
}

