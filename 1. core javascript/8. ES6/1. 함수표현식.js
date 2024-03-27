// 함수 선언문(정의문)
function add(n1, n2){
    return n1+n2;
}
const r1 = add(10,30);
console.log(r1);

const plus = add;

// 함수도 하나의 데이터이고 값이다.
console.log(typeof plus);

const r2 = plus(5,8);
console.log(r2);


// 익명함수 : 함수를 값(리터럴)으로 본 경우
// 함수 표현식
const multiply  = function(n1,n2){
    return n1*n2;
};

const r3 = multiply(3,4);
console.log(r3);


// 함수선언문 vs 함수표현식
// 함수선언문은 호출부 아래쪽으로 내려도 작동함. 근데 함수표현식은 아님
// 뭘 쓰는게 좋은가?
// 헬퍼함수 같은 경우는 함수표현식이 좋음

const array = [
    10, `zzz`, true, [`사자`], {}, add, multiply,
    function(){console.log(`우하하`);}
];

const r4 = array[5];
console.log(r4);

console.log(`======================`);

const dog = {
    name: `초코`,
    age : 3,
    fav: [`walkaround`, `nap`],
    // 메서드: 객체의 전용함수(객체의 기능을 표현)
    play: function(tool){
        console.log((`${this.name}강아지는 ${tool} 장난감으로 놀아요~`));
    }
}

dog.play(`개껌`);

