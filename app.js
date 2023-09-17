const input = document.querySelector('.input');
const output = document.querySelector('.output');
const numberKeyList = document.querySelectorAll('.number');

// 숫자 입력 핸들러
const setInputNumber = (number) => {
  if (input.innerText == '0') input.innerText = number;
  else input.innerText = input.innerText + number;
};

// onclick 이벤트 핸들러
const onClickNumber = (event) => {
  setInputNumber(event.target.innerText);
};

// key 각각에 클릭 이벤트 리스너 달기
numberKeyList.forEach((key) => {
  key.addEventListener('click', onClickNumber);
});

