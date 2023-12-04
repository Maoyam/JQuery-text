$(function() {
  let num = 0;

 $('#append').on('click', function(){
  num++;
  $('ul').append('<li>appendで追加' + num + '</li>');
 });

 $('#remove').on('click', function() {
  // 追加した分だけ削除するための準備
  num--;
  $('li:last').remove();

  要素がなくなったら変数を0にする
  if(num < 0){
    num = 0;
  }
 });
});