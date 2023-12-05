$(function () {

  $('#slideUp').on('click', () => {
    $('.box').slideUp();
  });

  $('#slideDown').on('click', () => {
    $('.box').slideDown();
  });

  $('#slideToggle').on('click', () => {
    $('.box').slideToggle();
  });
  });