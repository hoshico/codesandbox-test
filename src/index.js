// /** const.letの変数宣言*/

// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言　"

// const val3 ="const変数";
// console.log(val3);

// //cnst変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";


//constで定義したオブジェクトや配列はプロパティの変更が可能
const val4 = {
  name: "やす",
  age: 34,
};
val4.name = "yasuyuki";
val4.address = "Osaka"; 
console.log(val4);

const val5 = ['dog', 'cat'];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);



