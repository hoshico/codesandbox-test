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
  age: 34
};
val4.name = "yasuyuki";
val4.address = "Osaka";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

//テンプレート文字列
// const name = "やす";
// const age = 34;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));

//分割代入
//オブジェクトから指定のプロパティを抜きだし自由に使える

// const myProfile = {
//   name: "やす",
//   age: 34,
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const myProfile = ["やす", 34];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//デフォルト値(引数ががない場合の初期値を設定)

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

//スプレッド構文 ...

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfiltterを使った配列の処理
const nameArr = ["田中", "山田", "やす"];

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

//単純に配列に操作とreturnした結果をもとに配列を作る

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "やす") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

//三項演算子

//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const vall = 1 < 0 ? 'trueです' : 'falseです';
// console.log(vall);

// const num = "1300";?
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲ないです";
// };

// console.log(checkSum(50, 60));

//論理演算子の本当の意味をしろう

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

//||は左側がfalseなら右側をかえす。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
