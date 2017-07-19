/*
COLORIR POST-IT
Seletores: .botaoVerde, .botaoRosa ou .botaoAzul
-----------------------------------------------
Muda a cor de fundo de um post-it de acordo com o botão clicado.
*/

(function(){
  function limpaCores(postIt) {
    postIt.removeClass("postItAmarelo");
    postIt.removeClass("postItVerde");
    postIt.removeClass("postItRosa");
    postIt.removeClass("postItAzul");
  }

  $(document).on("click", ".botaoAmarelo", function(){
    limpaCores($(this.parentNode.parentNode));
    $(this.parentNode.parentNode).addClass("postItAmarelo");
  });

  $(document).on("click", ".botaoVerde", function(){
    limpaCores($(this.parentNode.parentNode));
    $(this.parentNode.parentNode).addClass("postItVerde");
  });

  $(document).on("click", ".botaoRosa", function(){
    limpaCores($(this.parentNode.parentNode));
    $(this.parentNode.parentNode).addClass("postItRosa");
  });

  $(document).on("click", ".botaoAzul", function(){
    limpaCores($(this.parentNode.parentNode));
    $(this.parentNode.parentNode).addClass("postItAzul");
  });
})();
