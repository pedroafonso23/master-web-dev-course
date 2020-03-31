// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua tal',
        numero: 1000
    }
}

const {nome, idade} = pessoa // Tire do objeto os atributos nome e idade. Qual objeto? Pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Tirando com novos nomes
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Por padrao bemHumorada eh true
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero: N, cep = 0000}} = pessoa
console.log(logradouro, N, cep)

// const {conta: {ag, num}} = pessoa // Ai da erro
// console.log(ag, num)    