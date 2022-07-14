$(function() {

  $('.beke-slider, .slider__items').slick({
      arrows:false,
      dots: true,
      fade:true,
      autoplay: true,
      autoplaySpeed: 2000
    });

    $(".menu, .bike__colun").on("click","a", function (event) {
      event.preventDefault();
        var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });

});