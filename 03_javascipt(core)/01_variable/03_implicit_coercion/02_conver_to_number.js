/* 02. 숫자 타입으로 변환 */
console.log(10 - '5'); // 결과 : 5, + 이외의 연산자를 사용하면 숫자 타입으로 변환됨.
console.log(10 * '5'); // 결과 : 50, + 이외의 연산자를 사용하면 숫자 타입으로 변환됨.
console.log(10 % 'javascript'); // 결과 : NaN : 숫자가 아니어서 연산 불가
console.log(10 > '5'); // 결과 : true : 5가 암죽적으로 숫자 타입으로 변환이 되어서 연산 가능(비교 연산자로 크기를 비교하기 위해서는 모두 숫자 타입이어야 한다.)
console.log(+ ''); // 결과 : 0(숫자 타입)
console.log(+ '1'); // 결과 : 1(숫자 타입)
console.log(+ 'javascript'); // 결과 : NaN
console.log(+ true); // 결과 : 1
console.log(+ false); // 결과 : 0
console.log(+ null); // 결과 : 0
console.log(+ undefined); // 결과 : NaN
// console.log(+ Symbol()); // 결과 : 오류
console.log(+ {}); // 결과 : NaN
console.log(+ []); // 결과 : 0 (빈 배열만 암묵적으로 숫자로 변경 가능)
console.log(+ [1, 2, 3]); // 결과 : NaN
console.log(+ function(){}); // 결과 : NaN

