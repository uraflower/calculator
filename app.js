const input = document.querySelector('.input');
const output = document.querySelector('.output');
const resetKey = document.querySelector('.reset');
const numberKeyList = document.querySelectorAll('.number');
const operatorKeyList = document.querySelectorAll('.operator');

// 숫자 입력 핸들러
const setInputNumber = (number) => {
  if (input.innerText == '0') input.innerText = number;
  else input.innerText = input.innerText + number;
};

// 연산자 입력 핸들러
const setInputOperator = (operator) => {
  if (isNaN(input.innerText[input.innerText.length - 1]))
    input.innerText = input.innerText.slice(0, -1) + operator;
  else input.innerText = input.innerText + operator;
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
  setInputOperator(event.target.innerText);
};

// key 각각에 클릭 이벤트 리스너 달기
resetKey.addEventListener('click', onClickReset);

numberKeyList.forEach((key) => {
  key.addEventListener('click', onClickNumber);
});

operatorKeyList.forEach((key) => {
  key.addEventListener('click', onClickOperator);
});
