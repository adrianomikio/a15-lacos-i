let numeroPedidoTabuada = Number(prompt("Me dê um número para que eu calcule a sua tabuada do 0 ao 10."))
let tabuadaNumeroPedido = []
for (let i = 1; tabuadaNumeroPedido.length < 10; i++) {
    tabuadaNumeroPedido.push(numeroPedidoTabuada*i)
}

for(let i = 0; i < tabuadaNumeroPedido.length; i++) {
    console.log(tabuadaNumeroPedido[i])
}