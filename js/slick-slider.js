$(document).ready(function() {
  $('.slick-1').slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    initialSlide: 1,
  });
});

$(document).ready(function() {
  $('.slick-min').slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: false,
    initialSlide: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  });
});
