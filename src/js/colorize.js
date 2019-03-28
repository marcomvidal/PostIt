/**
 * @module Colorize
 */
{
	/**
	 * Clears all Post-It colors classes.
	 * @param {Element} postIt
	 * @param {Array<String>} colors
	 */
	const clearColors = (postIt, colors) => {
		colors.map(color => {
			postIt.classList.remove(color.concat("-postit"));
		});
	}

	/**
	 * Colorizes a given Post-It with the color of the chosen tint.
	 * @event
	 */
	$(".row").on("click", ".glyphicon-tint", function (event) {
		const postIt = $(event.target.parentNode.parentNode)[0];
		const chosenColor = $(event.target.dataset)[0].color;

		clearColors(postIt, Button.colors);
		postIt.classList.add(chosenColor.concat("-postit"));
	});
}
