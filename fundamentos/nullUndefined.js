let valor // nao inicializada: undefined
console.log(valor) // undefined nao da erro
// console.log(valor2) // is not defiened: vai dar erro!

valor = null // ausencia de valor
console.log(valor)

// qnd vc quiser de proposito zerar o valor de uma variavel, usar null

// console.log(valor.toString()) // nao funciona pra variavel nula

const produto = {}
console.log(produto.preco) // nao da erro, da undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log((!!produto.preco))
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)