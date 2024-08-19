$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 60)
        {
            $('#navbar').addClass('navbar-fixed-top', 500);
        } else {
            $('#navbar').removeClass('navbar-fixed-top', 500);  
        }
    });
});