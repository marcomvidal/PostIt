/*
EXIBIR AJUDA
Seletor: #exibirAjuda
----------------------
Mostra um texto instrutivo de ajuda em forma de post-it. Usa a função
criarPostIt(), disponível no arquivo postit-controller.js.
*/

(function() {
  $('#exibirAjuda').click(function() {
    var conteudoPostIt = "Para criar um post-it, digite seu conteúdo na caixa de texto central e clique no botão Salvar.";
    postItController.criarPostIt(conteudoPostIt);
  });
})();
