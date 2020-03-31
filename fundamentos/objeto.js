const prod1 = {} // Par de chaves significa objeto
prod1.nome = 'Celular Ultra Mega'
// Objeto eh uma colecao de chaves e valores
// Um objeto pode ter outro objeto dentro dele
prod1.preco = 34587.65
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2 // Pode aninhar objetos a vontade
        }
    }
}

console.log(prod2)