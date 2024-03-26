// x부터 y까지의 누적합을 구해야함

function sum(x,y){
    var total = 0;
    for(let i=x; i <= y; i++){
        total += i;
    }
    return total;
}
console.log(sum(1,10));


// function with no parameter

function selectRandomPet(){
    var pets= [`명멍이`,`야옹이`, `짹짹이`,`고라니`,`노루루`];

    var ranNum = randomNumber(pets);

    return pets[ranNum];
}

function randomNumber(i){
    var num = Math.floor(Math.random()*i.length)
    return num;
}
var pet = selectRandomPet();
console.log(pet);