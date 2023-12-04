$(function() {
  let num = 0;

 $('#append').on('click', function(){
  num++;
  $('ul').append('<li>appendで追加' + num + '</li>');
 });
});