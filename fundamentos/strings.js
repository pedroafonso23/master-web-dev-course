const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Nao da erro, retorna vazio
console.log(escola.charCodeAt(3)) // Retorna codigo Unicode do char
console.log(escola.indexOf('r'))

console.log(escola.substring(2))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

