const employee = {
    empName : `뽀로로`,
    age: 10,
    hireDate: `2020-01-30`,
    birthDate: `2015-12-31`,
};

const name = employee.empName;

const {empName, hireDate, age} = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);

function foo({empName, age}){
    console.log(`내이름은 ${empName}`);
    console.log(`내 나이는 ${age}`);
}
foo(employee);

console.log(`===============================`);

const {age: empAge, birthDate} = employee;
console.log(empAge);

const divStyle = {
    'font-size' : `18px`,
    'background-color': `red`,
};

const {'font-size': fontSize, 'background-color': bgColor} = divStyle;
console.log(fontSize);
console.log(bgColor);

console.log(`===============================`);
const dog={
    kind: `말티즈`,
    name: `해피`,
    age : 3,
    injection: false,
};

const{kind, age: petAge, ...rest} = dog;

console.log(kind);
console.log(petAge);
console.log(rest);

// 객체 완전 복사
const copyDog = {...dog};
copyDog.age = 10;
console.log(copyDog);
console.log(dog);

const copyDog2 = {
    ...dog,
    age: 20,
    favourite : ['산책'],
};
console.log(copyDog2);

