/* 01. 비교 연산자 */

/* 동등, 일치 비교 연산자 */

// 숫자 1, 문자 '1' , true 비교
console.log(`1 == '1' : ${1 == '1'}`); // 암묵적으로 값이 변환되어서('1' -> 1로 변환) true로 나옴
console.log(`1 == true  : ${1 == true}`); // 암묵적으로 값이 변환되었기 때문에(true -> 1로 변환) true로 나옴

console.log(`1 === '1' : ${1 === '1'}`); // 값은 같지만 타입은 다르기 때문에 false
console.log(`1 === true  : ${1 === true}`); // 값은 같지만 타입은 다르기 때문에 false

// 숫자 0, 문자 '0' , false 비교
console.log(`0 == '0' : ${0 == '0'}`); // 암묵적으로 값이 변환되어서('0' -> 0로 변환) true로 나옴
console.log(`0 == ''  : ${0 == ''}`); // 빈문자열은 falsy 값
console.log(`0 == false : ${0 == false}`);

console.log(`0 === '0' : ${0 === '0'}`); // 암묵적으로 값이 변환되어서('0' -> 0로 변환) true로 나옴
console.log(`0 === ''  : ${0 === ''}`); 
console.log(`0 === false : ${0 === false}`);  

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`); // 둘 다 값이 없기 때문에 true
console.log(`null === undefined : ${null === undefined}`); // 타입은 다르기 때문에 false

// NaN은 자신과 일치하지 않은 유일한 값
console.log(`NaN == NaN : ${NaN == NaN}`); // 절대 값이 같은 수 없기 때문에 false

// 일치 비교 연산자
console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);

// 대소 비교 연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`); // 알파벳 순서로 비교(a->z로 갈 수록 커짐)
console.log(`'cat' >= 'Zoo' : ${'cat' >= 'Zoo'}`); // 대문자가 소문자 보다 작음

