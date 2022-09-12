let perguntaMaisCoxinhas = prompt("Você quer comer mais coxinhas? Escreva S se quiser, e N se não quiser.").toUpperCase()
let conta = 0

while (perguntaMaisCoxinhas === "S") {
    conta = conta + 2.5
    console.log(conta)
    perguntaMaisCoxinhas = prompt("Você quer comer mais coxinhas? Escreva S se quiser, e N se não quiser.").toUpperCase()
}

if (perguntaMaisCoxinhas === "N") {
    console.log(`O valor total resultou em R$${conta}.`)
}