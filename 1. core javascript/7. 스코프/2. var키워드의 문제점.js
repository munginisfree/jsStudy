//1. 변수의 중복선언을 암묵적으로 허용
// var x =10;
// let x = `ddd`;



//2. 블록레벨 스코프를 지원하지 않음
let i = `메롱`;
for(let i = 0; i<5; i++){
    console.log(`for-i: ${i}`);
}
console.log(`global-i: ${i}`);

// 3. 호이스팅: 선언위치와 관계없이 참조가능
hobby = `댄스`;

let hobby; 

console.log(hobby);