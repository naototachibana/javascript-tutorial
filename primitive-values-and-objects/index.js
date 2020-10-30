// プリミティブ型（基本型）
//     真偽値（Boolean）: trueまたはfalseのデータ型
//     数値（Number）: 42 や 3.14159 などの数値のデータ型
//     巨大な整数（BigInt）: ES2020から追加された9007199254740992nなどの任意精度の整数のデータ型
//     文字列（String）: "JavaScript" などの文字列のデータ型
//     undefined: 値が未定義であることを意味するデータ型
//     null: 値が存在しないことを意味するデータ型
//     シンボル（Symbol）: ES2015から追加された一意で不変な値のデータ型
// オブジェクト（複合型）
//     プリミティブ型以外のデータ
//     オブジェクト、配列、関数、正規表現、Dateなど
console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function