let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // Sinais na esquerda aumentam a prioridade dessa operacao
console.log(num1)

console.log(++num1 === num2--) // Da true pq ele primeiro incremente num1 e em seguida compara com num2 e depois decremente num2
console.log(num1 === num2)
// Evitar operadores dentro de uma comparacao, nao fica claro
