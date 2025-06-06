const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alcool = 0;
let gasolina = 0;
let diesel = 0;

console.log("Digite o tipo de combustível (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim):");

rl.on('line', (input) => {
  const tipo = parseInt(input);

  if (tipo === 4) {
    console.log("MUITO OBRIGADO");
    console.log("Alcool: " + alcool);
    console.log("Gasolina: " + gasolina);
    console.log("Diesel: " + diesel);
    rl.close();
  } else if (tipo === 1) {
    alcool++;
  } else if (tipo === 2) {
    gasolina++;
  } else if (tipo === 3) {
    diesel++;
  } else {
    // Ignora valores inválidos
  }
});