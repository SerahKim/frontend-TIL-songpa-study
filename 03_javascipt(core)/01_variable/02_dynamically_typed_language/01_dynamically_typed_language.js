/* 01. 동적 타입 언어 */
/*
변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론)되며
재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
*/

var test;
console.log(typeof(test)); // 결과 : undefined

test = 1;
console.log(typeof(test)); // 결과 : number

test = 'Javascript';
console.log(typeof(test)); // 결과 : string

test = true
console.log(typeof(test)); // 결과 : boolean

test = null;
console.log(typeof(test)); // 결과 : object, 이 때 타입이 object로 나오는데 이건 자바스크립트의 오류임(아직 안고쳐짐)

test = Symbol();
console.log(typeof(test)); // 결과 : symbol

test = {}; // 객체 리터럴
console.log(typeof(test)); // 결과 : object

test = []; // 배열
console.log(typeof(test)); // 결과 : object

test = function() {}; // 함수
console.log(typeof(test)); // 결과 : function

