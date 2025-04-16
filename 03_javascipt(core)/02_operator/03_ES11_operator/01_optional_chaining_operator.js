/* 03. ES11 연산자 */
/* 01. optional chainig 연산자 */

var obj = null;
// var val = obj.value; // 에러 
var val = obj?.value; // 에러를 발생시키지 않기 위해 ?사용
console.log(val); // 값이 없기 때문에 undefined 나옴.

var str = ""; // 빈문자열이기 때문에 falsy값이다.
var len = str && str.length; 
console.log(len); // 아무런 값도 안나옴

var len = str?.length;
console.log(len); // 결과 : 0