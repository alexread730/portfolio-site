$(document).ready(function() {
  $('.portfolio').hide();
  $('.jumbotron').hide();
  $('.jumbotron').fadeIn(1500);
  $('.portfolio-button').click(() => {
    $('.jumbotron').fadeOut(2000, () => {
      $('.portfolio').fadeIn(2000);
    });
  });

  $('.article-img').hover(function() {
    $(this).css('opacity', '.8');
  }, function() {
    $(this).css('opacity', '1');
  });


})
