{ 
    { 
        { 
            { 
                var sera = 'Sera???' 
            } 
        } 
    } 
}

console.log(sera) // Enxerga a variavel var ate mesmo fora do bloco

function teste() {
    var local = 123
}

teste()
// console.log(local) // Da erro, pq var tem escopo dentro de funcao
// Escopo da var ou eh global ou dentro de uma funcao
// Por isso var eh perigoso e deve-se usar mais o let