// 객체의 설계도 class

class Pet {

    // 생성자 통해 필드를 선언
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 메서드 선언
    introduce(){
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }
}

// 상속
class Dog extends Pet {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
}

class Cat extends Pet {
    constructor(name, age, sleep) {
        super(name, age);
        this.sleep = sleep;
    }
}
const dog = new Dog('choco', 3, 'walk around');
console.log(dog);

const cat = new Cat('meow', 10, 'nap');
console.log(cat);

console.log(dog === cat);

console.log('==============================');

dog.introduce();
cat.introduce();