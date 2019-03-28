/**
 * @module PostItController
 */
const PostItController = (() => {
    /**
     * Creates a Post-It with a given content.
     * @param {string} content
     * @returns {void}
     */
    const create = (content) => {
        if (!content) { return; }

        const id = $(".postit").length + 1;
        const buttons = PostIt.addToButtonsContainer(Button.createAll());
        const postIt = PostIt.buildContent(buttons, content);

        $(".row").prepend(PostIt.containerize(postIt, id, buttons));
        PostIt.clearContentField();
    }

    /**
     * Removes a given Post-It from `.row` container.
     * @param {Element} postIt 
     */
    const remove = (postIt) => {
        postIt.remove();
    }

    /**
     * Hides all Post-Its except the ones the matches the search `term`.
     * @param {string} term
     */
    const search = (term) => {
        $(".postit").hide().filter(function () {
            return $(this).find("p").text().match(new RegExp(term, "i"));
        }).show();
    }

    /**
     * Catches text from `#content`, sanatizes it and adds a new Post-It.
     * @event
     */
    $("#save").click(function () {
        const content = $("#content").val().trim().replace(/\n/g, "<br />");
        PostItController.create(content);
    });

    /**
     * Removes the Post-It that has its `.delete` button clicked.
     * @event
     */
    $(".row").on("click", ".delete", function () {
        PostItController.remove($(this.parentNode.parentNode.parentNode));
    });
    

    /**
     * Searches Post-Its that matches the `#searchterm` field as its content is typed.
     * @event
     */
    $("#searchTerm").keyup(function () {
        PostItController.search($(this).val().trim());
    });

    return {
        create: create,
        remove: remove,
        search: search
    }
})();
