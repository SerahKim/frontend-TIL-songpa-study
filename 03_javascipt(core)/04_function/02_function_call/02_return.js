/* 반환문 */

function hello(name) {
    return `${name}님 안녕하세요!`;

    //반환문 이후의 코드는 실행되지 않고 무시된다.
    console.log(name);
}

console.log(hello('유관순'));

function fun() {

    // 반환 값을 명시적으로 지정하지 않으면 undefined가 반환된다.
    return; // 생략 가능, 되돌려줄 값이 없을 때 return문은 생략이 가능하다.
}

console.log(func());