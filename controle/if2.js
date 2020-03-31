function teste1(num) {
    if(num > 7)
        console.log(num) // So estea linha esta dentro do IF
        console.log('Final') // Identacao nao vale em JS
}

teste1(6)
teste1(8)

// Melhor sempre usar chaves pra ficar claro o que esta dentro do IF

function teste2(num) {
    if(num > 7); { // O pnto e virgula deixa o IF vazio, pq isso significa que a linha terminou
        console.log(num)
    }
}

teste2(6)
teste2(8)

// Melhor nem usar ; em JS