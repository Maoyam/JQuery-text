$(function() {
  // class属性の戦闘がsampleの要素だけを抽出する
  const text = $('li[class^="sample"').text();
  console.log(text);
}); 