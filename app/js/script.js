$(document).ready(function () {
    $('nav.navigation ul li').click(function () {
        var el = `#${$(this).attr("data-id")}`;
        console.log(el)
        document.querySelector(el).scrollIntoView({
            behavior: 'smooth'
        });
    })
});