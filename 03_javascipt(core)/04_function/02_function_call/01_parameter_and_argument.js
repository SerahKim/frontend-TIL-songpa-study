/* 01. 매개변수와 인수 */

function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);
    return `${name}님 안녕하세요!`;
}

// console.log(name); // 매개변수를 함수 외부에서 참조하는 경우 에러 발생 (ReferenceError: name is not defined)

// 함수 호출
var result = hello('홍길동');
console.log(`result1 : ${result}`);

// 인수가 부족해서 할당되지 않은 매개 변수의 값은 undefined이다.
result = hello();
console.log(`result2 : ${result}`);

// 인수가 더 많은 경우 초과된 인수는 무시된다.
result = hello('홍길동', '유관순');
console.log(`result3 : ${result}`);

function hi(name='아무개') {
    return `${name} 안녕`;
}

// 매개변수 기본값 활용
result = hi();
console.log(`result4 : ${result}`);
