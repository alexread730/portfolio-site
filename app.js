$(document).ready(function() {
  $('.portfolio').hide();
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
