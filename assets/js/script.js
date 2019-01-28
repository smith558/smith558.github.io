$("#getInTouch").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#jump").offset().top
    }, 2000);
});

$(".learn-more").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section:nth-of-type(3)").offset().top
    }, 2000);
});
