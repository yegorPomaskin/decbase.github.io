$(function(){


$('.service__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:"<button class='slick-prev slick-arrow a-prev'><div class='arrow-next--img'></button>",
    prevArrow:"<button class='slick-next slick-arrow a-next'><div class='arrow-prev--img'></button>",
    responsive: [
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.testimonials__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow:"<button class='slick-prev slick-arrow a-prev'><div class='arrow-next--img'></button>",
  prevArrow:"<button class='slick-next slick-arrow a-next'><div class='arrow-prev--img'></button>",
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    },  
    {
      breakpoint: 470,
      settings: {
        variableWidth: true,
      }
    },  
  ]
});

$('.header__menu-btn').on('click', function(){
  $('.header__menu').slideToggle('active');
});

})