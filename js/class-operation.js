$(function() {
  // ボタンをクリック
  $('#add').on('click', function(){
    // 指定要素にclassを追加
    $('#target').addClass('sample');
  });

  $('#remove').on('click', function(){
    $('#target').removeClass('sample');
  });
});