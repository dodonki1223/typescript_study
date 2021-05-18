/*
    JavaScriptで発生しうる問題
      https://book.yyts.org/handson/make-a-simple-function-via-cli#javascriptdeshiuru
 */
function increment(num) {
  return num + 1;
}

console.log(increment(1));
// この書きぶりだと文字列に+1をするので結果として「11」になってしまう
console.log(increment('1'));
