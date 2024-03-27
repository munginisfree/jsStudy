var foods = [`족발`, `피자`, '파스타', '김치찌개'];

// 배열안에 특정 요소의 인덱스를 찾아 반환하는 함수

const NOT_FOUND = -1;

function myIndexOf(array, searchElement){
    for(var i = 0; i < array.length; i++){
        if(searchElement === array[i]){
            return i;
        }
    }
    return NOT_FOUND;
}


function myIncludes(array, searchElement){
    return myIndexOf(array, searchElement) !== NOT_FOUND;
}
var idx = myIndexOf(foods, '파스타');
console.log(`index: ${idx}`);

