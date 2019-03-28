/**
 * @module PostIt
 */
const PostIt = (() => {
    /**
     * Creates a container and stores color tint buttons.
     * @param {Array<Element>} buttons 
     */
    const addToButtonsContainer = (buttons) => {
        return $("<div>")
            .addClass("botoes-postit")
            .append(buttons);
    }

    /**
     * Attaches button container and content into an article body.
     * @param {Element} buttonContainer 
     * @param {string} content 
     */
    const buildContent = (buttonContainer, content) => {
        return $("<article>")
            .addClass("panel panel-default panel-body yellow-postit")
            .append(buttonContainer)
            .append($("<p>").html(content));
    }

    /**
     * Packages all parts of a Post-It into a div.
     * @param {Element} postIt 
     * @param {int} id 
     */
    const containerize = (postIt, id) => {
        return $("<div>").attr("id", `postit_${id}`)
            .addClass("postit col-md-4")
            .attr("data-ref", id)
            .append(postIt);
    }

    /**
     * Clears new Post-It content field.
     */
    const clearContentField = () => {
        $("#content").val("");
    }

    return {
        addToButtonsContainer: addToButtonsContainer,
        buildContent: buildContent,
        containerize: containerize,
        clearContentField: clearContentField
    }
})();