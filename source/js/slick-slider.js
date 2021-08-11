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

$(document).ready(function() {
  $('.slick-2').slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    rows: 2,
    autoplay: false,
    initialSlide: 0,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});
