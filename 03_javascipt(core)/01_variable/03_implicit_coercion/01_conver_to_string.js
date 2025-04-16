/* 03_암묵적 타입 변환 */
/* 
개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환이라고 하며
자바스크립트 엔진에 의해 암죽적으로 타입이 자동 변환되는 것을 암묵적 타입 변환이라고 한다.
*/

/* 01_문자열 타입으로 변환 */
/*  */
console.log(10 + '20'); // 1020 -> 문자열 계산됨
console.log(`10 + 20 : ${10 + 20}`); // 백틱을 사용함으로써 표현식의 결과를 문자열 타입으로 암묵적으로 변환
console.log(typeof(`10 + 20 : ${10 + 20}`)); // 결과 : string
console.log(1 + ""); // 1 -> 문자열 "1"
console.log(typeof(1 + "")); // 결과 : string
console.log(NaN + ""); // NaN -> 문자열 "NaN"
console.log(Infinity + ""); // Infinity -> 문자열 "Infinity"
console.log(null + ""); // null -> 문자열 "null"
console.log(undefined + ""); // undefined -> 문자열 "undefined"
// console.log(Symbol() + ""); // Symbol 타입은 문자열 변환 안됨.
var obf = { name : 'value'}
console.log(obf); // 결과 : { name : 'value' }
console.log(typeof(obf + ""));
console.log({} + ""); // 결과 : [object Object]
console.log([] + ""); // 결과 : 빈 문자열
console.log(function(){} + ""); // 결과 : function(){} 





