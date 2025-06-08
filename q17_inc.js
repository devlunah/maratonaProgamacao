const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tipoGasolina = {
    1: 0,
    2: 0,
    3: 0
}

for (tipo in tipoGasolina){
if(tipo >= 1 && tipo <= 3){
    tipoGasolina[tipo]++

}else if(tipo === 4){
    break

} else{
    alert("Digite um número válido!")
    continue
}

}
console.log(tipoGasolina);



