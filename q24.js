let compras = {  
 arroz: 5.50,  
 feijao: 7.20,  
 leite: 4.00,  
 cafe: 9.50  
};

let soma = 0;
let total = Object.values(compras)

for (let value of total){
    soma = soma + value;
}

console.log(soma);