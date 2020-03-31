function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho2 ^ trabalho1) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Diferenca simula o xor
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Recurso novo Ecma2015, se vc emitir o : ele cria a constante direto, nao precisa criar o par chave/valor de forma explicita
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))