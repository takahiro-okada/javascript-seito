const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answer: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answer: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answer: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
];
// while文を行うためにlengthを定義
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $question = document.getElementById('js-question');
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// クイズの問題分、選択肢を定義
const setupQuiz = () =>{
  $question.textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  // 配列の分だけ数を取得する。
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  };
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
    } else {
    window.alert('不正解');
    }
    // 2問目に渡す
    quizIndex++;
    // 問題数を比較する
    if(quizIndex < quizLength ){
    // 問題数がまだあればこちらを実行
      setupQuiz();
      $question.textContent = quiz[quizIndex].question;
    } else {
    // 問題数がなければこちらを実行
      window.alert('終了!あなたのせい回数は' + score + '/' + quizLength + "です！");
    }
  };

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength ){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
    });
    handlerIndex++;
};
