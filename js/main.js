$(document).ready(function(){
	
	$(".main-slaider").owlCarousel({
    loop:true,
    margin: 20,
    nav:true,
    dots:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            1200:{
                items:1
            }
        }  
    });
    
    $(".reviews-slaider").owlCarousel({
    loop:true,
    margin: 20,
    nav:true,
    dots:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            1200:{
                items:2
            }
        }  
    });

    $(".popup-slaider").owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    dots:true,
    navText:false,
    items:1
    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top-130}, 1000);
        return false;
	});

});

$(window).scroll(function(){
    if ($(window).scrollTop() > 1) {
        $('.wrap-header').addClass('fixed');
    }
    else {
        $('.wrap-header').removeClass('fixed');
    };
    if ($(window).scrollTop() > 30) {
        $('.bg-white-color').addClass('shadow-cl');
    }
    else {
        $('.bg-white-color').removeClass('shadow-cl');
    };
});