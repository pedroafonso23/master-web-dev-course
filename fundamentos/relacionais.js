console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // Estritamente igual: compara ate o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Data, o zero signigica a referencia 01/Jan/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // Comparando o endereco de memoria, nao e igual
console.log('10)', d1 == d2) // Mesma coisa acima
console.log('11)', d1.getTime() === d2.getTime) // Comparando a data em si

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// Via de regra eh melhor usar estritamente igual
// Dois iguais vao ignorar o tipo