/* 02.함수 표현식 */

// 이 코드에서 식별자는 hello1이기 때문에 hello2는 생략이 가능하다.
// 단, 잘 쓰지 않는 표현식임(애초에 var 자체가 잘 안쓰이는..)
var hello1 = function hello2(name) {
    return `${name}님 안녕하세요!`;
}

console.log(hello1('홍길동'));

// 함수 표현식에서 함수명을 생략하지 않아도 문제는 없다.
var calc = function add(a, b) {
    return a + b;
}

// 단, 함수 호출은 식별자로 이루어진다.
console.log(calc(10, 20));
// console.log(add(10, 20)); // 에러 발생 : 함수명으로 호출 불가능하다.