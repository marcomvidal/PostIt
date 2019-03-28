/**
 * @module Button
 */
const Button = (() => {
    /**
     * Defines the colors of the buttons of each Post-It.
     * @type {Array<string>}
     */
    const colors = ["blue", "green", "pink", "yellow"];

    /**
     * Creates an array that joins tints and delete buttons.
     * @returns {Array<Element>}
     */
    const createAll = () => {
        return new Array(createDeleteButton()).concat(createTintButtons());
    }

    /**
     * Creates tint buttons to all colors on `Button.colors` array.
     * @returns {Array<Element>}
     */
    const createTintButtons = () => {
        return colors.map(color =>
            $("<a>")
                .addClass(`${color}-button glyphicon glyphicon-tint`)
                .attr("data-color", color)
        );
    }

    /**
     * Creates a delete button.
     * @returns {Element}
     */
    const createDeleteButton = () => {
        return $("<a>").addClass("delete glyphicon glyphicon-remove");
    }

    return {
        colors: colors,
        createAll: createAll,
    }
})();