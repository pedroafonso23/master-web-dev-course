function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        fate: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { // Eh chamado de qualquer jeito, mesmo se nao der erro
        console.log('final')
    }
}

const obj = { nome: 'Pedro' } // Erro de proposito, aqui esta name e acima esta nome
imprimirNomeGritado(obj)