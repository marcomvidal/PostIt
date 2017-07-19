/*
ALTERAR VISUALIZAÇÃO ENTRE LINHAS / COLUNAS
Seletor: #alteraLayout
----------------------
Altera o layout da página entre exibir três ou um post-it (linhas) por linha.
Funcional apenas em telas maiores, com largura maior que 768 px.
*/

(function(){
  $("#alteraLayout").click(function(){
    /*
    Se os post-its estiverem dispostos em colunas (padrão em telas grandes, sig-
    nificado pela classe "col-sm-4"), o clique no botão faz com que fiquem em
    linhas e o ícone muda. O inverso também ocorre.
    */
    var postIts = $(".postit");

    if (postIts.hasClass("col-sm-4")) {
      postIts.removeClass("col-sm-4");
      $("#alteraLayout").removeClass("glyphicon-align-justify");
      $("#alteraLayout").addClass("glyphicon-th");
    } else {
      postIts.addClass("col-sm-4");
      $("#alteraLayout").removeClass("glyphicon-th");
      $("#alteraLayout").addClass("glyphicon-align-justify");
    }
  })
})();
