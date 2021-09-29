'use strict';
// object-oriendted programming
// class: template
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //constructor : 생성자
        // fields
        this.name = name;
        this.age = age;
        // 전달 된 애들을 할당함 this. 부분에
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;   // = 는 set를 불러온다
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error(`age can not be negative`);
        // } // 이렇게 쓰지 마!
        this._age = value < 0 ? 0 : value;   // 0
        // 이렇게 쓰면 더 좋아~
        // ? : if문~ 인뎅 저번에 if 대신에 ? 로 쓴다했오
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Wed/JavaScript/Refe...
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Roo soon!
class Article {
    static publisher = 'Dream Coding';
    // static publisher : 오브젝트 마다 들어가는 애가 아니라 클래스 자체의 애 이다!
    constructor(articleNumber) {               // constructor 얘 문법!!!
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);   // 얘넨 오브젝트
const article2 = new Article(2);
console.log(Article.publisher); // 오브젝트 안에 publisher(퍼블리셔) 출력 -> '몰랑~ 값 지정 안됐어.' 이러고는 오류가 난다.
Article.printPublisher();   // 자바스크립트는 클래스명 으로 불러야하고 인스턴스로는 안됨!

// 클래스가 가지고 있는 고유한 값 과 동일하게 사용하는 메소드가 있는뎅

// 메모리의 사용을 줄이는 방법
// 1. 스태틱과 스태틱 메소드 를 사용!
// 2. 스태틱을 사용하여 재사용 한다.

// 5. Inheritance
// a way for one class to extend
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();       // 부모에 호출
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`; // this.color: red (의미 있는 내용 출력됨)
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 클래스로 만들어진 인스턴스오브
// 생성자, 객체 에서도 쓰일 수 있다. (보통 상속 되어있느냐? 라고 물어보는것)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());   // [object object]
