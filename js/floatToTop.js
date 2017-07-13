
/** Float to Top */
$(window).scroll(function() {
    if (    $(window).scrollTop() > 300) {
        $('a.floatToTop').fadeIn('slow');
    }else {
        $('a.floatToTop').fadeOut('slow');
    }
})

$('a.floatToTop').click(function() {
    $('body').animate({
        scrollTop:0
    }, 1000);
    
    return false;
})


/** Homepage */
$('a.homePage').click(function() {
    $('body').animate({
        scrollTop:0
    }, 2000);
    
    return false;
})

/** About Us */
$('a.aboutUs').click(function() {
    $('body').animate({
        scrollTop:550
    }, 2000);
    
    return false;
})

/** Services */
$('a.services').click(function() {
    $('body').animate({
        scrollTop:1760
    }, 2000);
    
    return false;
})

/** Contact */
$('a.contact').click(function() {
    $('body').animate({
        scrollTop:3410
    }, 2000);
    
    return false;
})

/** External */
$('a.external').click(function() {
    $('body').animate({
        scrollTop:3900
    }, 1000);
    
    return false;
})