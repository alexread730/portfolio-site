$(document).ready(function() {
  $('.portfolio').hide();
  $('.portfolio-button').click(() => {
    $('.jumbotron').fadeOut(2000, () => {
      $('.portfolio').fadeIn(2000);
    });
  })


})
