$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#navbar').addClass('navbar-fixed-top');
        } else {
            $('#navbar').removeClass('navbar-fixed-top');
        }
    });
});



document.getElementById("music").addEventListener("click", function() {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});