$(document).ready(function(){
    $('.slider-1').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:3,
        speed:500,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:1000,
        initialSlide:1,
        responsive:[
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    autoplay:false
                }
            }, 
        ],
        
    });
});

$(document).ready(function(){
    $('.slider-2').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1500,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:1000,
        initialSlide:0,
        responsive:[
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    autoplay:false
                }
            }
        ],
        
    });
});

