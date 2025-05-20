//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// Pergunta ao usuário quantos jogos deseja adicionar
let quantidadeJogos = parseInt(gets());

// TODO: Inicializa os arrays com base na quantidade informada pelo usuário:
let nomesJogos = [];

// TODO: Crei um Loop para adicionar jogos conforme a quantidade especificada:
for (let i = 0; i < quantidadeJogos; i++) {
  let nomeJogo = gets();
  adicionarJogo(nomeJogo);  // Usa a função para adicionar o jogo ao array
}

// Exibe o resumo da adição de jogos
exibirResumoAdicaoJogos(quantidadeJogos, nomesJogos);


// TODO: Crie uma função adicionarJogo:
function adicionarJogo(nome) {
  nomesJogos.push(nome);
}

function exibirResumoAdicaoJogos(quantidadeJogos, nomes) {
    print(`\nFoi adicionado '${quantidadeJogos}' jogos: ${nomes.join(", ")} ao catalogo.`);
}