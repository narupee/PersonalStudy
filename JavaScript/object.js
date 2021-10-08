// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in javaScript are instances of Object

// 이부분 매우 중요!!!
// object = { key : value };
// "오브젝트는 키와 벨류의 집합체" 이다.
// 즉, 오브젝트는 키: 우리가 접근할 수 있는 '변수'
// const rupee = {name(얘가 키) : 'rupee'(얘가 벨류) , age(키): 4(벨류)};


// 크리미트타입은 변수 하나당 값을 하나만 담는다
// const  name = 'rupee'
// const age = 4;

// name,age 함수를 파라미터로 전달
// print(name, age);             // (1)
// function print(name, age) {   // 함수를 정의해서 쓸때도 두가지의 파라미터를 받아 올 수 있도록 만듬
//     console.log(name);
//     console.log(age);
// } // 이렇게 쓰면 생기는 문제
// 1. 예) 주소, 첫이름 ,마지막이름 등 "인자가 많아지면 추가해야 할 것들이 엄청 많아짐"
// 2. 관리가 힘듬, 그룹으로 묶어서 생각 할 수 없음

// 1. Literals and properties
// 오브젝트 만드는 방법
const obj1 = {};
const obj2 = new Object();
// {}; 만드는것 : 'object literal' 이라함 syntax(:문법)
// new 해서 만드는것 : 'object constructor' 이라함 syntax


// 오브젝트로 이렇게 받은 후 쓰는 방식은  이렇게 달라짐 (2)
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 위 문제점을 개선 하고자 "Object"를 쓴다.
const rupee = {name: 'rupee', age: 4};    // 클래스 없이 {}로 오브젝트 생성 가능
print(rupee);  // (2) 간편하게 데이터 관리 가능

// JavaScript 는 동적으로 타입이 Runtime(: 프로그램이 동작하고 있을때) 때 결정되는 언어이다.
rupee.hasJob = true;   // 뒤늦게 이렇게 추가 가능 , // true
console.log(rupee.hasJob);
// 동적으로 코딩하면 금방해서 좋지만 나중에 유지보수 어려움, 에러발생도 생김
// 가능한 이런 코딩은 피하는게 좋음
// 삭제도 바로 가능 ( 삭제하면 'undefined' 으로 나옴)
delete rupee.hasJob;
console.log(rupee.hasJob); // undefined

// 2. Computed properties(속성, 파일확장자)
// 주의할점) key should be always string //프로퍼티는 바로 스트링타입으로 해야함
// 계산된 프로퍼티 이다.
// .properties의 각 줄은 일반적으로 하나의 프로퍼티를 저장한다. 키=값, 키 = 값, 키:값, 키 값과 같이 여러 형태가 올 수 있다.
console.log(rupee.name);    // rupee (출력모습)
console.log(rupee['name']); // rupee
// . : 닷 을 통해 접근 가능 , 실시간으로 원하는 키의 값을 받아 오고 싶다면 닷을 사용. 웬만하면 닷을 이용
// 오브젝트 안에 있는 변수의 이름을 스트링 형태로 접근이 가능함 (배열느낌)
rupee['hasJob'] = true;
console.log(rupee.hasJob);  // true

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};   // 동일한 키와 벨류를 반복하는 문제점
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
// const person4 = makePerson('rupee' , 20);  // 'makePerson : 함수' 로 값을 전달
const person4 = new Person('rupee' , 20);  // 이렇게 사용 (3)
console.log(person4);   // Person {name: 'rupee', age: 20}
// function makePerson(name, age) {   // makePerson : 클래스 같은 아이이며, 클래스가 없을때 이런식으로 많이 작성함
//     return {
//         name,
//         age,   // 키 : 벨류 동일하면 생략 가능
//     };         // 위의 문제점을 이렇게 유용한 함수로 만들 수 있음
// }

// 4. Constructor Function
// 위의 방식 말고 이런식으로 사용 (3)
// 이 방식으로 하면 알아서 자바스크립트 엔진이 오브젝트를 생성함
function Person(name, age) {
    // (생략된걸 적은것) this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
// in 을 사용해 해당하는 오브젝트 안에 키가 있는지 없는지 확인하는 것
console.log('name' in rupee);   // true
console.log('age' in rupee);    // true
console.log('random' in rupee); // false (정의하지않은 걸 사용함)
console.log(rupee.random); // undefined (정의하지않은 걸 사용함)

// 6. 12:52
