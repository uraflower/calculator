const input = document.querySelector('.input');
const output = document.querySelector('.output');
const resetKey = document.querySelector('.reset');
const numberKeyList = document.querySelectorAll('.number');
const operatorKeyList = document.querySelectorAll('.operator');
const evalKey = document.querySelector('.evaluate');

let isDotUsed = false;

const calculate = () => {
  try {
    const _inputText = input.innerText
      .replaceAll('x', '*')
      .replaceAll('÷', '/');
    output.innerText = eval(_inputText);
  } catch (e) {
    console.log('Calculation Error');
  }
};

// 숫자 입력 핸들러
const setInputNumber = (number) => {
  if (input.innerText == '0') input.innerText = number;
  else input.innerText = input.innerText + number;
  calculate();
};

const setIsDotUsed = (value) => {
  isDotUsed = value;
};

// 연산자 입력 핸들러
const setInputOperator = (operator) => {
  if (isNaN(input.innerText[input.innerText.length - 1]))
    input.innerText = input.innerText.slice(0, -1) + operator;
  else input.innerText = input.innerText + operator;
  setIsDotUsed(false);
};

const pushDot = (dot) => {
  if (isDotUsed == false) {
    input.innerText += dot;
    setIsDotUsed(true);
  }
};

// onclick 이벤트 핸들러
const onClickReset = () => {
  input.innerText = '0';
  output.innerText = '';
};

const onClickNumber = (event) => {
  setInputNumber(event.target.innerText);
};

const onClickOperator = (event) => {
  if (event.target.value == 'dot') pushDot(event.target.innerText);
  else setInputOperator(event.target.innerText);
};

const onClickEval = () => {
  input.innerText = output.innerText;
  output.innerText = '';
};

// key 각각에 클릭 이벤트 리스너 달기
resetKey.addEventListener('click', onClickReset);

numberKeyList.forEach((key) => {
  key.addEventListener('click', onClickNumber);
});

operatorKeyList.forEach((key) => {
  key.addEventListener('click', onClickOperator);
});

evalKey.addEventListener('click', onClickEval);
