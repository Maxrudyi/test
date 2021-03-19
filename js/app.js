$(function () {

    var header = $("#header"),
        containerH = $("#container").innerHeight(),
        scrolloffset = $(window).scrollTop();

    checkScroll(scrolloffset);

    $(window).on("scroll", function () {

        scrolloffset = $(this).scrollTop();
        checkScroll(scrolloffset);

    });

    function checkScroll(scrolloffset) {

        if (scrolloffset >= containerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("#header a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


});