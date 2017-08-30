$(document).ready(function() {

  $('.article-img').hover(function() {
    $(this).css('opacity', '.8');
  }, function() {
    $(this).css('opacity', '1');
  });

  $('.contact-info').hide();

  $('.contact').click(event => {
    $('.contact').fadeOut(500, event => {
      $('.contact-info').fadeIn(500);
    });

  });

    $('.contact-info').click(event => {
      $('.contact-info').fadeOut(500, event => {
        $('.contact').fadeIn(500);
      });

    });



})
