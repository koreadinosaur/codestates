//의사 코드
//버튼 클릭하면, input에 해당 버튼 출력. 숫자를 입력하면 변수에 저장해뒀다가
//만약 클릭한 버튼이 연산자라면, 그 전까지의 숫자는 배열에 할당시키고,
//변수는 0으로 초기화한다.
//숫자와 연산자를 다른 배열에 저장해놔야 한다.
//submit하면, input으로부터 입력된 값을 계산해서 받아온다.
//해당 값은 string이기 때문에 연산이 되도록 바꿔줘야 한다.
//고급 : 계산 log를 따로 저장해서 출력하고, 클릭하면 다시 input에 출력.

const calcInput = document.querySelector(".section-result");
const calcResultForm = document.querySelector(".result__Container");
const inputBtn = document.querySelectorAll(".input__Btn");
let storeValue;
let currentValue = "";
function printValue(event) {
  const targetValue = event.target.innerText;
  if (event.target.classList.contains("initial")) {
    currentValue = "";
    storeValue = "";
    calcInput.value = 0;
  }
  if (event.target.classList.contains("operatorEqual")) {
    calcSubmitForm(event);
  }
  if (event.target.classList.contains("operator")) {
    switch (targetValue) {
    }
    currentValue = "";
  } else {
    //숫자 입력했을 때 currentValue에 저장.
    currentValue += targetValue;
  }
  if (!event.target.classList.contains("initial")) {
    calcInput.value += targetValue;
  }
}
function calcSubmitForm(event) {
  event.preventDefault();
  console.log(calcInput.value);
}
inputBtn.forEach((x) => x.addEventListener("click", printValue));
calcResultForm.addEventListener("submit", calcSubmitForm);

/*계산기 재귀함수
let operatorStore = ['x','x','x'];
let numberStore =[4,2,3,2];
let result = 0;
switch(operatorStore[0]){
    case 'x' :
        result = numberStore[0] * numberStore[1];
        operatorStore = operatorStore.slice(1)
        numberStore = numberStore.slice(2)
        break;
     
}
function calc(numberArray, operatorArray, number){
        if(numberStore.length === 0 || operatorStore.length === 0) return result;
        switch(operatorStore[0]){
        case 'x' :
            result = numberStore[0] * number;
            operatorStore = operatorStore.slice(1)
            numberStore = numberStore.slice(1)
            break;     
    }
    return calc(numberStore,operatorStore,result);
}

calc(numberStore,operatorStore,result);
*/
