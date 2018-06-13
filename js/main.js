$(document).ready(function(){
	$(".main-slaider").owlCarousel({
    loop:true,
    margin: 20,
    nav:true,
    navText:true,
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
});