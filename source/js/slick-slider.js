window.$ = jQuery;
window.jQuery = jQuery;

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


$(document).ready(function() {
  $('.slick-doc').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
          }
      },
      {
        breakpoint: 768,
          settings: "unslick"
      },
    ]
  });
});

$(window).resize(function() {
  if (window.innerWidth < 768) {
    $('.slick-doc').not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
    })
  } else {
      $('.slick-doc').slick('unslick');
    }
});
