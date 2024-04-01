// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a){
    return function(n1, n2){
        return n1+n2;
    };
};

const x = Calculator();
console.log(typeof x);
const y = x(10,20);
console.log(`y: ${y}`);

console.log(`====================`);

const z = Calculator()(6, 9);
console.log(`z: ${z}`);

console.log(`====================`);
const operate = ()=>(n1,n2)=> n1*n2;
console.log(operate()(2,3));

console.log(`====================`);
function bar(){
    function fas(){
        return 10;
    }
    return fas;
}
const h = bar()();
console.log(h);


//카운트를 증가시키는 함수

// let count = 0; //global variable

// const increase = () => count++;
// console.log(increase());
// console.log(increase());
// count = 9999;
// console.log(increase());
// console.log(`c: `,count);

console.log(`====================`);


// const increase = () =>{
//     let count = 0;
//     return ++count;
// };

// increase();
// increase();
// const count = increase();
// console.log(`c: `,count);

// golbal variable 을 안쓰고 local variable을 증가하는 방법
// closer을 통해 local variable의 scope를 늘려줄 수 있다
const increaseClosure = ()=>{
    let count = 0;

    return ()=>++count;
};
const increase = increaseClosure();
console.log(increase());
console.log(increase());
count = 999;
console.log(increase());

console.log(`====================`);

// 즉시 실행 함수: 함수를 1회성으로 사용할 목적으로 만드는 함수
(function(){
    console.log(`hello`);
})();

const increase_ = (() => {
    let count = 0;
    return () => ++count;
})();
increase_();
increase_();
increase_();

