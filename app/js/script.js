$(document).ready(function () {
    $("nav.navigation ul li").click(function () {
        var el = `#${$(this).attr("data-id")}`;
        console.log(el);
        document.querySelector(el).scrollIntoView({
            behavior: "smooth",
        });
    });

    $(".js-input").keyup(function () {
        if ($(this).val()) {
            $(this).addClass("not-empty");
        } else {
            $(this).removeClass("not-empty");
        }
    });
});
