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

    $('form').on('submit', sendEmail);

	function sendEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;

        var $phoneInput = $form.find('input[name="phone"]');
        var $reasonInput = $form.find('input[name="reason"]');

        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valReason = $reasonInput.length > 0 ? $reasonInput.val() : '';

        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }
        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);
        if (hasError) {
            return false;
        }
        var obj = {
            phone: valPhone,
            reason: valReason,
        };
        $.ajax({
            type: "POST",
            url: "/mailpost.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
            	$.fancybox.close(true);
                $phoneInput.val("");
            },
        });
    }


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