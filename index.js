// 変数
let unko = "Hello World";
// unko = "Hello World2";

// 定数
const bigUnko = 'He..Hell..HelloWorld!';
// bigUnko = "Hello World2";
let inoki = ['いーち','にーい','さーん','だー'];

// console.log(inoki);
// console.log(inoki[3]);

// ループ文
// let index = 0;
// while(index < inoki.length){
//   // 繰り返しをしたい処理
//   console.log(inoki[index]);
//   index++;
// }

// if else
// ifの{}の中の条件を満たしたら、{}が実行される
// if(inoki.length > 5){
//  console.log('ボンバイヤ');
// } else {
//   console.log('ボンバ...!')
// }

// 関数
// const test = () =>{
//   if(inoki.length > 5){
//     console.log('ボンバイヤ');
//    } else {
//      console.log('ボンバ...!')
//    }
// }

// test();

// 引数
const test = (arg) =>{
  if(inoki.length > arg){
    console.log('ボンバイヤ');
   } else {
     console.log('ボンバ...!')
   }
};

// オブジェクト
const unko2 = {
  color:"pink",
  purfume:"mint",
  size:"large",
  goToilet: () => {
    console.log("Hello World!!");
  }
};

console.log(unko2.goToilet());
// window:Webブラウザ全体のオブジェクト
console.log(window.innerHeight);
console.log(window.innerWidth);
// document:表示しているページ全体のオブジェクト
// console.log(document);
// window.alert('hello world')
// console.log(unko2.goToilet());

console.log(document.getElementsByTagName('button')[0]);
// addEventListenerは引数を2つ指定できる
document.getElementsByTagName('button')[0].addEventListener('click',() => {
  // 命令を書く
  window.alert("hello world222");
});
