const peso1 = 1.0 // Ponto flutuante
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.235

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // Em binario
console.log(typeof media) // O tipo da constante media eh number
console.log(typeof Number) // Esse Number eh uma funcao
console.log(media.toPrecision)
console.log(media)