let produto = [
    {
        "nome": "arroz",
        "preco": 10
    },
    {
        "nome": "feijão",
        "preco": 20
    },
    {
        "nome": "lapis",
        "preco": 2
    },
    {
        "nome": "macarrão",
        "preco": 3
    },
    {
        "nome": "carne",
        "preco": 30
    }

]

let soma = 0
for (let i = 0; i<produto.length; i++){
    soma = soma + produto[i].preco;

}
console.log(soma);
