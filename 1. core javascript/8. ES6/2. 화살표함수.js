// // 함수 선언문
// function add(n1, n2){
//     return n1+n2;
// }

// // 함수 표현식
// const add = function(n1, n2){
//     return n1+n2;
// };

// 화살표 함수
const add = (n1, n2) => n1+n2;


const r1 = add(10,20);
console.log(r1);

const sayHi = () => console.log(`안녕하세요`);

sayHi();

const kim ={
    name: `kimcheolsoo`,
    greeting: sayHi,
    dance:()=>console.log(`dancing`)
};

kim.dance();
kim.greeting();

const pow = n => n**2; 