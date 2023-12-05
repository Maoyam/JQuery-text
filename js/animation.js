$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on('click', function() {
    // フェードアウトする
    $('.box').fadeOut();
    });

  // id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on('click', function() {
    // フェードインする
    $('.box').fadeIn();
  })
  });