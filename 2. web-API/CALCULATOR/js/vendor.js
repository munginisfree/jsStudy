// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.getElementById("input-number");

const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");

// result요소노드
const $currentResult = document.getElementById("current-result");
// 계산 로그 요소 노드
const $currentCalculation = document.getElementById("current-calculation");

// result에 그려질 숫자
let currentResult = 0;

let count = 0;

// card 영역
const $logs = document.getElementById('logs');

// =====================함수 정의 영역====================//
const calculate = (e) => {
    count++;
    // 1. 입력창에 입력한 숫자를 읽어와야함
    const enteredNumber = +$userInput.value;
    const prevResult = currentResult;

    // operator가져오기
    const currentOperator = e.target.textContent;

    if (currentOperator === "+") {
        doAdd(prevResult, enteredNumber);
    }
    if (currentOperator === "-") {
        doSubtract(prevResult, enteredNumber);
    }
    if (currentOperator === "*") {
        doMultiply(prevResult, enteredNumber);
    }
    if (currentOperator === "/") {
        doDivide(prevResult, enteredNumber);
    }
    // 3. 화면에 랜더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult}${currentOperator}${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    // 계산 로그

    updateLog(count, prevResult, currentOperator, enteredNumber, currentResult);
};

function doAdd(prev, curr) {
    prev = currentResult;
    currentResult += curr;
}

function doSubtract(prev, curr) {
    prev = currentResult;
    currentResult -= curr;
}
function doMultiply(prev, curr) {
    prev = currentResult;
    currentResult *= curr;
}
function doDivide(prev, curr) {
    prev = currentResult;
    currentResult /= curr;
}

// 계산식 업데이트 하기

function updateLog(i, prevResult, currentOperator, enteredNumber, currentResult){

    const $ul = $logs.querySelector('.log-entries');

    const $newLogLi = document.createElement('li');
    $newLogLi.classList.add('log-entries__item');
    $newLogLi.textContent = `${i}. ${prevResult} ${currentOperator} ${enteredNumber} = ${currentResult}`;
    $ul.appendChild($newLogLi);

}