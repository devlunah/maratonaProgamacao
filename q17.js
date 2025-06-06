let tipoGasolina = {
    1: 0,
    2: 0,
    3: 0
}

while(true){
    let entrada = prompt("Digite o tipo de combustível (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim):");
    let tipo = Number(entrada);

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
}



