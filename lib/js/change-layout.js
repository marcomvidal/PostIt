/**
 * @module ChangeLayout
 */
{
    /**
     * Changes view between lines and table by clicking `#change-layout` button.
     * @event
     */
    $("#change-layout").click(function () {
        const icons = ["glyphicon-align-justify", "glyphicon-th"].join(" ");

        $(".postit").toggleClass("col-sm-4 col-md-4");
        $("#change-layout").toggleClass(icons);
    });
}
