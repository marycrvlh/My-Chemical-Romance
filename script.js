// Seleciona todos os botões de todos os cards
const botoes = document.querySelectorAll('.card-botao');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Encontra o card pai mais próximo deste botão específico
    const cardAtual = botao.closest('.card');
    
    // Encontra o conteúdo específico dentro deste card atual
    const conteudoAtual = cardAtual.querySelector('.card-conteudo');
    
    // Alterna a exibição apenas deste conteúdo
    conteudoAtual.classList.toggle('ativo');
    
    // Altera o texto do botão clicado
    if (conteudoAtual.classList.contains('ativo')) {
      botao.textContent = '-';
    } else {
      botao.textContent = '+';
    }
  });
});