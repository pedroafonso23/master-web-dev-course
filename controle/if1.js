function soBoaNoticis(nota) {
    if(nota >= 7) {
        console.log('Aprovador com ' + nota)
    }
}

soBoaNoticis(8.1)
soBoaNoticis(4)

function seForVerdadeEuFalo(valor) {
    if(valor) { // Em JS varias coisas podem ser testadas pra true or false
        console.log('Eh verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('') // False
seForVerdadeEuFalo(' ') // True
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2, 5])
seForVerdadeEuFalo({}) // Object vazio