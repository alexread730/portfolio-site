$(document).ready(function() {
  $('.portfolio').hide();
  $('.jumbotron').hide();
  $('.jumbotron').fadeIn(1500);
  $('.about').hide();
  $('.about').fadeIn(1500);
  $('.portfolio-button').click(() => {
    $('.jumbotron').fadeOut(1500, () => {
      $('.portfolio').fadeIn(1500);
    });
  });

  $('.article-img').hover(function() {
    $(this).css('opacity', '.8');
  }, function() {
    $(this).css('opacity', '1');
  });


})
