//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Crie as variáveis titulo, descricao e dataVencimento para guardar as informações das tarefas:

let titulo;
let descricao;
let dataVencimento;

// Obtém o titulo e a descricao a partir da entrada do console  
titulo = gets();
descricao = gets();
dataVencimento = gets(); // <-- falta essa linha no código base, mas é necessária

// TODO: Crie uma estrutura condicional 'if/else' para verificar se a descrição da tarefa excede 50 caracteres.
if (descricao.length > 50) {
    print("Descricao ultrapassa limite de caracteres.");
}else if(descricao.length <= 50 && descricao.length > 30){
    print("Configurar alertas para trafego em tempo real ate 18/12");
}else {
    // TODO: Imprima a descricao e a data de vencimento como nos exemplos da tabela:         
    print(descricao + " ate " + dataVencimento);
}
