// Funcao sem retorno
function imprimirSoma(a, b) { // a e b sao parametros
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) 
imprimirSoma(2, 23, 5, 7, 4, 2) 
imprimirSoma()
// JS eh bem flexivel

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


