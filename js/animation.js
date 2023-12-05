$(function () {
// idがfadeToggleの要素がクリックされたら
$('#fadeTaggle').on('click', function() {
  // フェードイン or フェードアウトする
  $('.box').fadeToggle();
})
  });