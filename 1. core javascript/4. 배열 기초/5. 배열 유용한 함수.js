var foodList = [`닭꼬치`, '볶음밥', '짜장면', '족발'];

var target = `짜장면`;

var index = foodList.indexOf(target);
console.log(`index: ${index}`);


// concat, slice 는 사본을 가져다줌. 원본 변화 없음 안전해~


// splice() 배열의 삭제 및 삽입. 원본에서 삭제,삽입을 진행하므로 원본이 손상됨
var i = foodList.splice(1, 2);
console.log(foodList);

foodList.splice(0, 1, `pasta`, '보쌈');
console.log(foodList);

foodList.splice(2, 0, `마라탕`);
console.log(foodList);

foodList.splice(1);
console.log(foodList);