// 객체 생성
// 우리집 강아지 귀여워~~
var name =`뽀삐`;
var kind = `진돗개`;
var age = 3;
var injection = true;
var fav = [`산책`, `간식`];
var bark = ( )=>console.log(`왈왈`);

var dog = {
    name : `뽀삐`,
    kind : `진돗개`,
    age : 3,
    injection: true,
    fav : [`산책`,`간식`],
    bark:() => console.log(`왈왈`),

}

// 우리 집 고양이 정보 저장
var cat = {
    kind: '코숏',
    favorite: ['낮잠', '방 어지르기'],
    name: '콩순이',
    age: 2,
    injection: true,
    hate: {},
    'for waiting': 33
  };
  

console.log(dog.name);

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(dog.fav[1]);

// 데이터 타입: 어떤 데이터가 할 수 있는 일을 정의
dog.age++;
!dog.injection;
dog.fav.push(`꼬리흔들기`);


// 객체를 참조하는 두번째 방법
var key = `name`;
console.log(dog.name);
console.log(dog[`name`]);
console.log(dog[key]);


// editing property
dog.age = 4;
cat.favorite[1] = `실뭉치`;

console.log(cat);

// property dynamic add
cat.friend = `철수`
console.log(cat);

// delete property
delete cat.hate;
delete cat.friend;