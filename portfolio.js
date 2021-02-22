$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 200;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    $('a').hover(function() {
        $(this).not('.mail').css("color", "red");
    }, function() {
        $(this).not('.mail').css("color", "black");
    });
});