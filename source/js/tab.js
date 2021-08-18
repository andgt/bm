$(document).ready(function($) {
  $('.objects__card-container').hide();
  $('.objects__card-container:first').show();
  /*$('.tabs li:first').addClass('active');*/
  $('.objects__slider-2-wrapper').click(function(event) {
    /*$('.tabs li').removeClass('active');
    $(this).addClass('active');*/
    $('.objects__card-container').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});
