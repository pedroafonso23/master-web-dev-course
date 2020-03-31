function rand({ min = 0, max = 1000 }) { // Vai tirar de dentro do objeto passado pra funcao os paramentros min e max, vai desestruturar o objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40, med: 45 }

console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({ max: 10 }))
console.log(rand({}))
//console.log(rand()) // Isso nao pode
