// 일반함수에서 this
function foo(){
    // nodejs에서 this는 global 객체를 표현
    // 브라우저에서는 window라느 전역객체를 표현
    console.log(this);
}

// foo();

// 객체에서의 this
const madeBy = `KIA`;
const model = `k7`;

const car = {
    madeBy: `Hyundai`,
    model: `그랜져`,
    showInfo: function (){
        console.log(this);
        console.log(`제조사: ${this.madeBy}, 모델명: ${this.model}`)
    }
}

// car.showInfo();

// 이벤트 핸들러의 this - function으로 선언시 이벤트를 건 요소
const $btn = document.getElementById('btn');
const buttonHandler = function (e){
    console.log(`버튼 클릭!`);
    console.log(this);
    this.style.background = `red`;
};

$btn.addEventListener('click', buttonHandler);