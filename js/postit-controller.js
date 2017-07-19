var postItController = (function(){
  // Verifica a quantidade de post-its existentes para adicionar um ID inédito.
  var idPostIt = $(".postit").length

  /*
  CRIAR POST-IT
  Seletores: #salvarPostIt e #exibirAjuda
  ----------------------
  Cria um post-it de forma genérica. Pode ser acionado ao criar um novo post-it
  ou exibindo a ajuda.
  */
  function criarPostIt(conteudoPostIt){
    // Incrementa o ID para que não haja repetição
    idPostIt++;
    // Se houver conteúdo no post-it digitado:
    if (conteudoPostIt){
      // Gera os botões e a <div> que os armazena.
      var botaoExcluir =    $("<a>")  .addClass("excluirPostIt glyphicon glyphicon-remove");
      var botaoAmarelo =    $("<a>")  .addClass("botaoAmarelo glyphicon glyphicon-tint");
      var botaoVerde =      $("<a>")  .addClass("botaoVerde glyphicon glyphicon-tint");
      var botaoRosa =       $("<a>")  .addClass("botaoRosa glyphicon glyphicon-tint");
      var botaoAzul =       $("<a>")  .addClass("botaoAzul glyphicon glyphicon-tint");
      var containerBotoes = $("<div>").addClass("botoes-postit")
                                      .append(botaoExcluir)
                                      .append(botaoAmarelo)
                                      .append(botaoVerde)
                                      .append(botaoRosa)
                                      .append(botaoAzul);
      /*
      Cria a seguinte estrutura dentro do container .row:
      <div><article>containerBotoes + conteudoPostIt</article></div>
      */
      var conteudoComTag = $("<p>").html(conteudoPostIt);
      var postIt = $("<article>") .addClass("panel panel-default panel-body postItAmarelo")
                                  .append(containerBotoes)
                                  .append(conteudoComTag);

      /*
      Se os post-its estiverem dispostos em colunas, o post-it é criado com li-
      mitação de tamanho lateral.
      */
      if ($(".postit").hasClass("col-sm-4")){
        $("<div>").attr("id", "postit_" + idPostIt)
                  .attr("data-ref", + idPostIt)
                  .addClass("postit col-sm-4")
                  .append(postIt)
                  .prependTo(".row");
      } else {
        $("<div>").attr("id", "postit_" + idPostIt)
                  .attr("data-ref", + idPostIt)
                  .addClass("postit")
                  .append(postIt)
                  .prependTo(".row");
      }

      // Limpa o conteúdo do campo #conteudoPostIt após criação do post-it
      $("#conteudoPostIt").val("");
    }
  }

  // Criação de um novo post-it digitado pelo usuário
  $("#salvarPostIt").click(function(){
    var conteudoPostIt = $("#conteudoPostIt").val().trim().replace(/\n/g, "<br />");
    criarPostIt(conteudoPostIt);
  });

  /*
  EXCLUIR POST-IT
  Seletor: #excluirPostIt
  ----------------------
  Exclui o post-it que foi clicado o botão com X. Por necessitar excluir a <div>
  inteira, sobe três níveis no DOM.
  */
  $(document).on("click", ".excluirPostIt", function(){
    $(this.parentNode.parentNode.parentNode).remove();
  });

  /*
  BUSCAR POST-IT
  Seletor: #buscarPostIt
  ----------------------
  Captura o texto digitado pelo usuário no campo #buscarPostIt e busca um post-
  it que o contenha.
  */
  $("#buscarPostIt").click(function(){
    var termoBusca = $("#conteudoBusca").val().trim();

    /*
    Esconde todos os post-its, exceto todos os que conferem com ao conteúdo da
    variável termoBusca. A busca é case-insensitive, por isso o RegExp tem parâ-
    metro 'i'.
    */
    $(".postit").hide().filter(function(){
      return $(this).find("p").text().match(new RegExp(termoBusca, "i"));
    }).show();
  })

  return{
    criarPostIt:criarPostIt
  }
})();
