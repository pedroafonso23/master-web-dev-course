//--------- ARRAY =[,] ------------

const valores = [7.7, 8.9, 6.4, 9.3] // Declaracao de array (tipo object)
console.log(valores[0], valores[3]) // Acessar elementos
valores[4] = 10 // Adicionar elemento
valores.push({id: 3}, false, null, 'teste') // Push elementos
valores.pop() // Tirar ultimo elemento
delete valores[2] // Deleta elementos

//--------- CLASS ------------

//--------- OBJECT ={:,} ------------

// Objects sao grupos aninhados de pares chave/valor

// declaracao nome = {id1: content, id2: content, id3: content, etc}
const cliente = {
    nome: 'Pedro', 
    idade: 32,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123
    }
}

cliente.sexo = 'H' // Criando novo atributo

//--------- FUNCTION (,){} ------------

// Objects e Classes em JS sao Functions

// Tradicional: function nome(paramentros) {corpo + return} 
function soma(a, b = 1) {
    return a + b
}

// Armazenando arrow function em var/const: declaracao nome = (paramentros) => {corpo + return}
const soma = (a, b) => {
    return a + b
}

// Retorno implicito: declaracao nome = (paramentros) => corpo
const subtracao = (a, b) => a - b

//--------- MISC ------------

// Declarar variavel com let (escopo reduzido) e nao var (escopo global)

// Testar se qualquer coisa eh true ou false, usar !!, exs:
console.log(!!-1)
console.log(!!' ')
console.log(!!undefined)

const resultado = a != b // Diferenca simula o xor

const area = Math.PI * Math.pow(raio, 2) // Funcao Math para fazer calculos

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Ternarios sao uma comparacao, o que retorna se for verdadeiro e o que retorna se for falso

// BLOCOS sao linhas de codigos que estao dentro de {}. Function, Class e Object sao formados por blocos. Variavel let tem escopo dentro de bloco. Var tem escopo global ou dentro de Function.
