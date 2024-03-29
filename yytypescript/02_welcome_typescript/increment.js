/*
    JavaScriptで発生しうる問題に対応したTypeScriptの書きぶり
      https://book.yyts.org/handson/make-a-simple-function-via-cli#javascriptdeshiuru
      引数と返り値に型情報を設定することで正しい値で返すことができるようになる
 */
function increment(num) {
    return num + 1;
}
// TypeScriptで記述すると以下のようなエラーがでるようになります
// 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
// console.log(increment('1'));
// これで問題ない！
console.log(increment(1));
