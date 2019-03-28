/**
 * @module PostItFactory
 */
{
    /**
     * Creates demonstrations of Post-Its.
     * @event
     */
    $(document).ready(function () {
        const demoPostIts = [
            "Esta aplicação é 100% front-end e usa apenas HTML, CSS e JavaScript.",
            "Você pode criar novos post-its, pesquisar pelos existentes ou excluí-los.",
            "Bem-vindo ao Post-It!<br />Um mural on-line."
        ];

        demoPostIts.map(postIt => PostItController.create(postIt));
    });

    /**
     * Creates an informational Post-It.
     * @event
     */
    $('#showHelp').click(function () {
        const content = "Para criar um post-it, digite seu conteúdo na caixa de texto central e clique no botão Salvar.";
        PostItController.create(content);
    });
}