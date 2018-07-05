$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    adaptiveHeight: true,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        arrows: false,
        appendDots:$('.doters-pagination'),
        customPaging : function(slider, i) {
            return '<button class="doters-slick mg-right-10"></button>';
        },
    });

    $(window).on('scroll', function () {

        var numBoxTop = $('.box-servicos-gerais').offset().top - 600,
        numWindowTop = $(window).scrollTop();

        if(numWindowTop > numBoxTop){
            var arrBoxes = $('.box-servicos-gerais').find('.box-servicos');
            for(i = 0; i < arrBoxes.length; i++) {
                var elemAtual = $(arrBoxes[i]);

                if(!elemAtual.hasClass('active')){
                    elemAtual.addClass('active');
                }
            }
        }
    });
});
