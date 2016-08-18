$(window).scroll(function() {
    if($(this).scrollTop() < 300) {
        $('.navbar-fade').addClass('opaque');
    } else {
        $('.navbar-fade').removeClass('opaque');
    }
});
