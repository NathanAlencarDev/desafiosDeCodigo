//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário);
//- "print": imprime um texto de saída (output), pulando linha.

// Inicializa um array para armazenar os itens
let itens = [];

// Lê os 3 itens usando gets() e adiciona ao array
for (let i = 0; i < 3; i++) {
    let item = gets();
    itens.push(item);
}

// Exibe a lista formatada
print("Lista de itens:");
for (let i = 0; i < itens.length; i++) {
    print("- " + itens[i]);
}
